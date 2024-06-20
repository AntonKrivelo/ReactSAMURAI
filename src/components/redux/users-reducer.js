let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';



let initialState = {
  users: [ ],
  totalUsersCount: 20,
  pageSize: 10,
  currentPage: 1,
  isFetching: true
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: 
      return {
        ...state, 
            users: state.users.map(u =>  {
            if (u.id === action.userId ) {
                return {...u, followed: true}
              }
              return u;
          })  
      }
      case UNFOLLOW:
          return {
            ...state,
                users: state.users.map(u => {
                  if(u.id === action.userId) {
                    return {...u, followed: false}
                  }
                  return u;
                })}
      case SET_USERS: 
          return { ...state, users: action.users}
      case SET_CURRENT_PAGE:
          return {...state, currentPage: action.currentPage}

      case TOGGLE_IS_FETCHING:
          return {...state, isFetching: action.isFetching}
      default: return state;
  }

  
  return state
};

export const toggleIsFetchingActionCreator = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const followActionCreator = (userId) => {
  return  {type: FOLLOW, userId}
}

export const unfollowActionCreator = (userId) => {
  return {type: UNFOLLOW, userId}
};


export const setUsersActionCreator = (users) => {
  return {type: SET_USERS, users}
};

export const setCurrentPageActionCreator = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};

// export const setUsersTotalCountActionCreator = (totalUsersCount) => {
//   return {type: SET_USERS_TOTAL_COUNT, count: totalUsersCount}
// }








export default usersReducer;


