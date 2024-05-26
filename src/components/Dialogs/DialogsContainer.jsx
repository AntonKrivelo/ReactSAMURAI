import React from "react";
import { submitMessageActionCreator, onMessageChangeActionCreator} from "../redux/store";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSubmitMessage = () => {
        props.store.dispatch(submitMessageActionCreator());
    };

    let onMessageChange = (text) => {
        // props.store.dispatch(onMessageChangeActionCreator(text));
        let action = onMessageChangeActionCreator(text);
        props.store.dispatch(action);
    };

   return (
    <Dialogs updateNewMessageText={onMessageChange} sendMessage={onSubmitMessage} messagesPage={state} newMessageText={state.newMessageText} />
   )
}











export default DialogsContainer;