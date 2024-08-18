import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let ADD_MESSAGE = 'ADD-MESSAGE';


let store = {
  
_state: {

  profilePage: {
      postsData: [
          {message:"hello my friends, my name is Anton", counter: 18, id:1},
          {message:"hi, how are you?", counter: 20, id:2},
          {message:"hi, how are you?", counter: 20, id:3},
          ],
  },
  messagesPage: {
      messagesData: [
          {message: "Hi!", id: 1},
          {message: "How are you?", id: 2},
          {message: "Thank you", id: 3},
          {message: "Hello", id: 4},
          {message: "My friend", id: 5},
        ],
        dialogsData: [
          {name: "Anton", id: 1},
          {name: "Nikolays", id: 2},
          {name: "Viktoria", id: 3},
          {name: "Sveta", id: 4},
          {name: "Andrey", id: 5},
          {name: "Sergey", id: 6},
        ],
        newMessageText: '',
  },
  // sideBar: {
  //   friendsData: [
  //     {name: "Antonio", id: 1},
  //     {name: "Viktor", id: 2},
  //     {name: "Valera", id: 3},
  //   ],
  // },
  newsPage: {
    newsPageText: 'Oops, the page is under construction :(',
  },
},
getState() {
  return this._state;
},
_callSubscriber() {
  console.log('checked!');
},
subscribe(observer) {
  this._callSubscriber = observer;
},
pageTheme() {
 return this._callSubscriber;
},


dispatch(action) {
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
  this._state.sideBar = sideBarReducer(this._state.sideBar, action);
  

  this._callSubscriber(this._state);


  // if(action.type === ADD_POST) {
  //     let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     counter: 0,
  // }
  //     this._state.profilePage.postsData.push(newPost);
  //     this._state.profilePage.newPostText = '';
  //     this._callSubscriber(this._state);
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //     this._state.profilePage.newPostText = action.newText;
  //     this._callSubscriber(this._state);
  // } else if (action.type === ADD_MESSAGE) {
  //   let newMessage = {
  //     id: 8,
  //     message: this._state.messagesPage.newMessageText,
  //   };
  //     this._state.messagesPage.messagesData.push(newMessage);
  //     this._state.messagesPage.newMessageText = '';
  //     this._callSubscriber(this._state);
  // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
  //     this._state.messagesPage.newMessageText = action.newText;
  //     this._callSubscriber(this._state);
  // }
},

};


export const addPostActionCreator = (newPostText) => {
  return {
      type: ADD_POST, newPostText
  };  
};

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text};
};


export const submitMessageActionCreator = (newMessageText) => {
  return {
      type: ADD_MESSAGE, newMessageText
  }
}

// export const onMessageChangeActionCreator = (message) => {
//   return {type: UPDATE_NEW_MESSAGE_TEXT, newText: message}
// }



export default store;  