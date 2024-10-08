import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getUsersSuper = createSelector((users) => {
    return getUsers().filter(u => true)
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgresss = (state) => {
    return state.usersPage.followingInProgress;
}