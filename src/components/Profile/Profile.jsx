import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";

const Profile = (props) => {

    if (props.isAuth == false) return <Navigate to={"/login"} />

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>  
    );
};


export default Profile;