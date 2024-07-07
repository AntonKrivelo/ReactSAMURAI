import { connect } from "react-redux";
import { followSuccess, unfollowSuccess, setUsers, setCurrentPage, toggleIsFetching, followingInProgress, getUsersThunkCreator } from "../redux/users-reducer";
import React from "react";
import User from "./User";
import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.pageSize, this.props.pageSize);
    }   

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.currentPage);
                
//         this.props.toggleIsFetching(true);
//         this.props.getUsers(pageNumber, this.props.pageSize).then(data => {  
//             this.props.toggleIsFetching(false);
//             this.props.setUsers (data.items)
//             this.props.setCurrentPage(pageNumber);
// })
        };

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
                    followingInProgress={this.props.followingInProgress}
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
        followingInProgresss: state.usersPage.followingInProgress,
        getUsers: state.usersPage.getUsersThunkCreator,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followSuccess(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowSuccess(userId))
        },
        setUsers:(users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPage(pageNumber))
        },
        toggleIsFetching:(isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        },
        followingInProgress:(isFetching, userId) => {
            console.log(isFetching,userId)
            dispatch(followingInProgress(isFetching,userId))
        },
        getUsers:(pageSize, currentPage) => {
            dispatch(getUsersThunkCreator(pageSize,currentPage))
        }
      





        // setTotalUsersCount:(totalCount) => {
        //     dispatch(setUsersTotalCountActionCreator(totalCount))
        // }

    }
}
// {follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, followingInProgress }

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);

  
    
    
    
    



    
// this.props.getUsersThunkCreator(pageNumber, this.props.currentPage);
        
// this.props.toggleIsFetching(true);
// getUsers(pageNumber, this.props.pageSize).then(data => {  
//     this.props.toggleIsFetching(false);
//     this.props.setUsers (data.items)
//     this.props.setCurrentPage(pageNumber);
// })