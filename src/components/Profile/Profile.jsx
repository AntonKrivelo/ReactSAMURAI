import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {


    return (
        <div className={classes.content}>
            <div className={classes.bgContent}>
                <img src="https://s0.rbk.ru/v6_top_pics/media/img/4/04/346843326750044.jpg" />
            </div>
            <ProfileInfo name="Anton K." birthday="29 May" city="Minsk" education="BSU" />
            <MyPostsContainer />
        </div>  
    );
};


export default Profile;