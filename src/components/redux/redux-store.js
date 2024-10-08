import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
// import sideBarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import {thunk as ThunkMiddleware} from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import appReducer from './app-reducer';


let reducersPack = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer, 
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // sideBar:sideBarReducer,
});


let store = legacy_createStore(reducersPack, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;