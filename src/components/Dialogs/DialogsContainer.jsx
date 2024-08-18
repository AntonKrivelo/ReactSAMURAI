import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { submitMessageActionCreator} from "../redux/store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.newMessageText, 
    }
}

let mapDispatchToProps = (dispatch) => {
     return {
        
        sendMessage: (newMessageText) => {
            dispatch(submitMessageActionCreator(newMessageText));
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default compose (
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs) ;
