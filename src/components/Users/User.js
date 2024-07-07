import React from "react";
import classes from './Users.module.css';
import userIMG from '../../assets/image/userIMG.png';
import { NavLink } from "react-router-dom";



const User = (props) => {

    
    const {followingInProgresss = []} = props;
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
                    <img className={classes.photos} src={u.photos.small != null ? u.photos.small: userIMG} alt="img" />
                </NavLink>  
                    
                    {u.followed 
                    // disabled={props.followingInProgress.some(id => id === u.id)}
                    ? <button disabled={followingInProgresss.length && followingInProgresss?.some(id => id === u.id)}  onClick={() => {
                        
                        props.unfollow(u.id);

                    }}  className={classes.unfollow__btn}>UnFollow</button> 
                    // disabled={props.followingInProgress.some(id => id === u.id)}
                    : <button disabled={followingInProgresss.length && followingInProgresss?.some(id => id === u.id)}   onClick={() => {
                        
                        props.follow(u.id)

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