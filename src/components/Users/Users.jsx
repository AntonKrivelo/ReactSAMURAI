import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import userIMG from '../../assets/image/userIMG.png';


let Users = (props) => {
        if(props.users.length === 0) {
        axios.get ("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers (response.data.items)
        });

    }

    return (
        <div className={classes.content}>
            {
            props.users.map( u => <div key={u.id}> 
                
                <div className={classes.global}>
                    <img className={classes.photos} src= {u.photos.small != null ? u.photos.small: userIMG} alt="photo" />
                        {u.followed ? <button onClick={() => {props.unfollow(u.id)}} className={classes.unfollow__btn}>UnFollow</button> : <button onClick={() => {props.follow(u.id)}} className={classes.follow__btn}>Follow</button> }
                </div>
               
                <div className={classes.background__users}> 
                    <div className={classes.info__user}>
                        <div className={classes.name__user}>{u.name}</div>
                        <div className={classes.status__user}>{u.status}</div>
                    </div>
                    <div className={classes.location__user}> 
                        <div className={classes.country__user}>{u.country}</div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};




export default Users;