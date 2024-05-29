import React from "react";
import { submitMessageActionCreator, onMessageChangeActionCreator} from "../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../redux/storeContext";

const DialogsContainer = (props) => {

   

   return <StoreContext.Consumer> 
    {
        (store) => {
            let state = store.getState().messagesPage;

            let onSubmitMessage = () => {
                store.dispatch(submitMessageActionCreator());
            };
        
            let onMessageChange = (text) => {
                // props.store.dispatch(onMessageChangeActionCreator(text));
                let action = onMessageChangeActionCreator(text);
                store.dispatch(action);
            };
      return <Dialogs 
            updateNewMessageText={onMessageChange} 
            sendMessage={onSubmitMessage} 
            messagesPage={state} 
            newMessageText={state.newMessageText} />}
    }
   </StoreContext.Consumer>
}


export default DialogsContainer;