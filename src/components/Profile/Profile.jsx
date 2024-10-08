import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "../ProfileInfo/ProfileStatus";
import ProfileStatusWithHooks from "../ProfileInfo/ProfileStatusWithHooks";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
};


export default Profile;
