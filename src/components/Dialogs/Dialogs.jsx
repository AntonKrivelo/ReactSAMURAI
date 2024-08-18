import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
    
    let state = props.messagesPage;
   
    // let newMessagesElement = React.createRef();
    
    let addMessage = (values) => {
      props.sendMessage(values.newMessageText)
    };

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = state.messagesData.map(m => <Message message={m.message} id={m.id} /> );
   
    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div>  {messagesElements} </div>
            <DialogsReduxForm onSubmit={addMessage} />
       </div>
    );
}
 

const DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageText" placeholder="Enter your message" />
            </div>
            <div className={classes.messages}>
                <div className={classes.addMessages}>
                    {/* <textarea value={state.newMessageText} onChange={onMessageChange} ref={newMessagesElement} className={classes.textAreaMessage} placeholder="transfereed message..."></textarea> */}
                    <button className={classes.btnMessage}>Send</button>
                </div>    
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogsForm'}) (DialogsForm)

export default Dialogs;