import { getUsers } from "../../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
// let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
  users: [ ],
  totalUsersCount: 20,
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
         
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
       return {
        ...state,
          followingInProgress: action.isFetching 
            ? [...state.followingInProgress,action.userId]
            : state.followingInProgress.filter(id => id != action.userId)
       }
      }
          default: return state;
  }

};

export const toggleIsFetching = (isFetching) => {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const followSuccess = (userId) => {
  return  {type: FOLLOW, userId}
}

export const unfollowSuccess = (userId) => {
  return {type: UNFOLLOW, userId}
};


export const setUsers = (users) => {
  return {type: SET_USERS, users}
};

export const setCurrentPage = (currentPage) => {
  return {type: SET_CURRENT_PAGE, currentPage}
};

export const followingInProgress = (isFetching, userId) => {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}
// export const setUsersTotalCountActionCreator = (totalUsersCount) => {
//   return {type: SET_USERS_TOTAL_COUNT, count: totalUsersCount}
// }


// THUNK - и


export const getUsersThunkCreator = (pageSize, currentPage) => {
 return (dispatch) => {

      dispatch(toggleIsFetching(true));
      getUsers(currentPage, pageSize).then(data => {  
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items)) ;
   // this.props.setTotalUsersCount (response.data.totalCount)
    }); 
  }
}

export const follow = (id) => {
  return (dispatch) => {
    dispatch(followingInProgress(true, id));
    follow(id)
    .then(response => {  
            if(response.data.resultCode == 0) { 
            dispatch(followSuccess(id))  
        }
        dispatch(followingInProgress(false, id));
    })
  }
}

export const unfollow = (id) => {
  return (dispatch) => {
    dispatch(followingInProgress(true, id));
    unfollow(id)
        .then(response => {  
            if(response.data.resultCode == 0) { 
            dispatch(unfollowSuccess(id))
        }
        dispatch(followingInProgress(false, id));
    })
  }
}


export default usersReducer;

