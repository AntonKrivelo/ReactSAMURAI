import React from "react";
import Profile from "./Profile";
import { getUserProfile } from "../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(ProfileContainer) {
    return(props) => {
        const match = {params: useParams()};
        return <ProfileContainer {...props} match = {match}/>

    }
}

class ProfileContainer extends React.Component {

componentDidMount() {
    let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 31383;
        }
        this.props.getUserProfile(userId);
}
    render() {
        return (
               <Profile {...this.props} profile={this.props.profile} />
            )
        }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


export default compose (
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer);



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);