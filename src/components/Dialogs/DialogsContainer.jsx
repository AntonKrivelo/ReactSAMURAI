import { submitMessageActionCreator, onMessageChangeActionCreator} from "../redux/store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.newMessageText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
     return {
        updateNewMessageText: (text) => {
            let action = onMessageChangeActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            dispatch(submitMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;