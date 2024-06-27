import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../common/preloader/preloader";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    
    // if(props.profile.contacts === null) {
    //     return (
    //         <div>
    //             <span>
    //                 none
    //             </span>
    //         </div>
    //     )
    // }

    if(props.profile.contacts === null) {
        return 'none'
    }

    return (
        <div className={classes.mainContent}>
                
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large} alt="photos" />
                </div>
                <div className={classes.mainInformation}>
                    <div className={classes.name}>
                        {props.profile.fullName}
                        <div className={classes.aboutMe}>
                            {props.profile.aboutMe}
                        </div>
                    </div>
                    <ul className={classes.contacts}>
                        <li className={classes.contactPoint}>facebook: {props.profile.contacts.facebook}</li>
                        <li className={classes.contactPoint}>website: {props.profile.contacts.website}</li>
                        <li className={classes.contactPoint}>vk: {props.profile.contacts.vk}</li>
                        <li className={classes.contactPoint}>twitter: {props.profile.contacts.twitter}</li>
                        <li className={classes.contactPoint}>instagram: {props.profile.contacts.instagram}</li>
                        <li className={classes.contactPoint}>youtube: {props.profile.contacts.youtube}</li>
                        <li className={classes.contactPoint}>mainLink: {props.profile.contacts.mainLink}</li>
                    </ul>
                </div>
        </div>
    );
};


export default ProfileInfo;