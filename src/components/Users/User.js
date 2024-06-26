import React from "react";
import classes from './Users.module.css';
import userIMG from '../../assets/image/userIMG.png';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { unFollow, follow } from "../../api/api";

const User = (props) => {
   
        let countPages = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [ ];
    
        for (let i = 1; i <=  countPages; i++) {
            pages.push(i)
        }
    
    return (

    
        <div className={classes.content}>
                
            {pages.map(p => {
                return <span className={props.currentPage === p  && classes.selectedPage} onClick={() => {props.onPageChanged(p)}}>{p}</span> 
               
            })};

            {
            props.users.map( u => <div key={u.id}> 
                
                <div className={classes.global}>
                   
                   <NavLink to={'/profile/' + u.id}>  
                        <img className={classes.photos} src= {u.photos.small != null ? u.photos.small: userIMG} alt="photo" />
                   </NavLink>  
                     
                        {u.followed 
                        
                        ? <button onClick={() => {
                            unFollow(u)
                            .then(response => {  
                                if(response.data.resultCode == 0) {
                                    props.unfollow(u.id);
                                }
                        })

                        }}  className={classes.unfollow__btn}>UnFollow</button> 
                           
                        : <button onClick={() => {
                            follow(u)
                            .then(response => {  
                                if(response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                        })
                            }} className={classes.follow__btn}>Follow</button> }
                                
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
}



export default User;