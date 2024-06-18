import { connect } from "react-redux";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from "../redux/users-reducer";
import React from "react";
import axios from "axios";
import User from "./User";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {  
        this.props.setUsers (response.data.items);
        // this.props.setTotalUsersCount (response.data.totalCount)

     });
    }
  
    onPageChanged = (pageNumber) => {
        axios.get (`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {  
        this.props.setUsers (response.data.items)
        this.props.setCurrentPage(pageNumber);
    })};

    render() {

        return <User totalUsersCount={this.props.totalUsersCount} 
                     pageSize={this.props.pageSize} 
                     currentPage={this.props.currentPage} 
                     onPageChanged={this.onPageChanged}
                     unfollow={this.props.unfollow}
                     follow={this.props.follow}
                     users={this.props.users}
                     />
       
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow:(userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        // setTotalUsersCount:(totalCount) => {
        //     dispatch(setUsersTotalCountActionCreator(totalCount))
        // }

    }
}


export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);