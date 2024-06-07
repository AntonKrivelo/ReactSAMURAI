import {combineReducers, legacy_createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sideBarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducersPack = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    usersPage: usersReducer,
    // sideBar:sideBarReducer,
});


let store = legacy_createStore(reducersPack);

window.store = store;

export default store;