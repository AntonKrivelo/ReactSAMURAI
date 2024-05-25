import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { submitMessageActionCreator, onMessageChangeActionCreator } from "../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let newMessagesElement = React.createRef();

    let submitMessage = () => {
        props.dispatch(submitMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        let action = onMessageChangeActionCreator(text);
        // props.store.dispatch(onMessageChangeActionCreator(text));
        props.dispatch(action);
    };

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} /> );
   

    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addMessages}>
                    <textarea value={props.state.newMessageText} onChange={onMessageChange} ref={newMessagesElement} className={classes.textAreaMessage} placeholder="transfereed message..."></textarea>
                    <button onClick={submitMessage} className={classes.btnMessage}>Send</button>
                </div>
            </div>
       </div>
    );
}











export default Dialogs;