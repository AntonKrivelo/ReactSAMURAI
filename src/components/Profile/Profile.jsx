import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "../ProfileInfo/ProfileStatus";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} />
            <ProfileStatus status={props.status} />
            <MyPostsContainer />
        </div>
    );
};


export default Profile;
