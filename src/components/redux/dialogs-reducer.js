let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    
    if (action.type === ADD_MESSAGE) {
        let newMessage = {
          id: 8,
          message: state.newMessageText,
        };
          state.messagesData.push(newMessage);
          state.newMessageText = '';
          
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
          state.newMessageText = action.newText;
      }
    return state;
};


export default dialogsReducer;