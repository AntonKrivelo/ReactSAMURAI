import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";
const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: true,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state, 
        ...action.payload,
          
          }  


          default: 
          return state;
      }
    }

export const setUserData = (userId, email, login, isAuth) => {
  return {type: SET_USER_DATA, payload: {userId,email,login, isAuth} }
};

export const getAuthMe = () => {
    return (dispatch) => {
      authAPI.me()  
      .then(response => {  
              if(response.data.resultCode === 0) {
                  let {id, login, email} = response.data.data;
                  dispatch(setUserData(id, email, login, true));
              }
      })
    }
}

export const login = (email, password, rememberMe) =>  {
 
      return (dispatch) => {
      authAPI.login(email, password, rememberMe)  
        .then(response => {  
              if(response.data.resultCode === 0) {
                  dispatch(getAuthMe())
         } else {
              let message = response.data.message > 0 ? response.data.message[0] : "Incorrect email in password!";
              dispatch(stopSubmit("login", {_error: message}));
         }
      })
    }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()  
      .then(response => {  
            if(response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
    })
  }
}


export default authReducer;


