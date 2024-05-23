import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

    let newMessagesElement = React.createRef();
    
    let submitMessageActionCreator = () => {
        return {
            type: 'ADD-MESSAGE'
        }
    }

    let onMessageChangeActionCreator = (text) => {
        return {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text}
    }

    
    let submitMessage = () => {
        props.dispatch(submitMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        let action = onMessageChangeActionCreator(text);
        props.dispatch(action);
    };

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id} /> );
   
    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addMessages}>
                    <textarea value={props.newMessageText} onChange={onMessageChange} ref={newMessagesElement} className={classes.textAreaMessage} placeholder="transfereed message..."></textarea>
                    <button onClick={submitMessage} className={classes.btnMessage}>Send</button>
                </div>
            </div>
       </div>
    );
}











export default Dialogs;