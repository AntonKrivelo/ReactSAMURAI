let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {name: "Ivan K.", id: "1", status: "status is not defined", country: "Minsk, Belarus", followed: false},
    {name: "Kirill S.", id: "2", status: "status is not defined", country: "Vitebsk, Belarus", followed: false},
    {name: "Viktor R.", id: "3", status: "status is not defined", country: "Gomel, Belarus", followed: true},
    {name: "Merry K.", id: "4", status: "status is not defined", country: "Brest, Belarus", followed: true},
  ]
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
    return {
        ...state, users: [...state.users, ...action.users] }
  }
  
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










export default usersReducer;


