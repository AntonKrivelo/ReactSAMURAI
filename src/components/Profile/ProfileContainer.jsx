import React from "react";
import Profile from "./Profile";
import { setUserProfile } from "../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { usersProfile } from "../../api/api";




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

        usersProfile(userId).then(response => {  
            this.props.setUserProfile(response.data);
    });
}

    render() {
        return (
               <Profile {...this.props} profile={this.props.profile} />
            )
        }

}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);