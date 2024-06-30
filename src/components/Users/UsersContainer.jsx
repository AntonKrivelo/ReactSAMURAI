import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from "../redux/users-reducer";
import React from "react";
import axios from "axios";
import User from "./User";
import Preloader from "../common/preloader/preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {  
        this.props.toggleIsFetching(false);
        this.props.setUsers (response.data.items);
        // this.props.setTotalUsersCount (response.data.totalCount)

     });
    }
  
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {  
        this.props.toggleIsFetching(false);
        this.props.setUsers (response.data.items)
        this.props.setCurrentPage(pageNumber);
    })};

    render() {

        return  <> 
        
                {this.props.isFetching ? 
                    <div><Preloader /></div>
                : null}
                <User totalUsersCount={this.props.totalUsersCount} 
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    /> 
            </>
       
    }  

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow:(userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow:(userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers:(users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage:(pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         toggleIsFetching:(isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//         // setTotalUsersCount:(totalCount) => {
//         //     dispatch(setUsersTotalCountActionCreator(totalCount))
//         // }

//     }
// }


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, }) (UsersContainer);

  
    
    
    
    



    
    