let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';
// let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';



let initialState = {
  users: [ ],
  totalUsersCount: 50,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  toggleInProgress: false,
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
      case SET_USERS: {
        return { ...state, users: action.users}
      }   
      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
      }
      case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.isFetching}
      }
         
      case TOGGLE_IN_PROGRESS: {
        return {...state, toggleInProgress: action.isFetching}
      }
          default: return state;
  }

};

export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const follow = (userId) => {
  return  {type: FOLLOW, userId}
}

export const unfollow = (userId) => {
  return {type: UNFOLLOW, userId}
};


export const setUsers = (users) => {
  return {type: SET_USERS, users}
};

export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};

export const toggleInProgress = (isFetching) => {
  return {type: TOGGLE_IN_PROGRESS, isFetching}
}
// export const setUsersTotalCountActionCreator = (totalUsersCount) => {
//   return {type: SET_USERS_TOTAL_COUNT, count: totalUsersCount}
// }








export default usersReducer;


