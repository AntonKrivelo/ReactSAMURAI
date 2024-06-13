let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';



let initialState = {
  users: [ ],
  totalUsersCount: 20,
  pageSize: 10,
  currentPage: 2
}

const usersReducer = (state = initialState, action) => {
  if(action.type === FOLLOW) {
        return  {
              ...state, 
                users: state.users.map(u =>  {
                if (u.id === action.userId ) {
                  return {...u, followed: true}
                }
                return u;
         })  
      }

  }  else if (action.type === UNFOLLOW) {
    return {
          ...state,
              users: state.users.map(u => {
                if(u.id === action.userId) {
                  return {...u, followed: false}
                }
                return u;
              })
          }
  } else if (action.type === SET_USERS) {
    return { ...state, users: action.users}
        
      } else if (action.type === SET_CURRENT_PAGE) {
    return {...state, currentPage: action.currentPage}
   } 
  //  else if (action.type === SET_USERS_TOTAL_COUNT) {
  //   return {...state, totalUsersCount: action.count}
  // }
  
  return state
};


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


