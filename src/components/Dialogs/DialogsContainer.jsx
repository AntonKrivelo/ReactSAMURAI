import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { submitMessageActionCreator, onMessageChangeActionCreator} from "../redux/store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.newMessageText, 
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;