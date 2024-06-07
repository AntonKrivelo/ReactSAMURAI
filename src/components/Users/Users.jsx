import React from "react";
import classes from './Users.module.css';


let Users = (props) => {

    // if(props.users.length === 0) {
    //     props.setUsers (
    //         [
    //             {name: "Ivan K.", id: "1", status: "status is not defined", country: "Minsk, Belarus", followed: false},
    //             {name: "Kirill S.", id: "2", status: "status is not defined", country: "Vitebsk, Belarus", followed: false},
    //             {name: "Viktor R.", id: "3", status: "status is not defined", country: "Gomel, Belarus", followed: true},
    //             {name: "Merry K.", id: "4", status: "status is not defined", country: "Brest, Belarus", followed: true},
    //         ]
    //     )
    // }

    return (
        <div className={classes.content}>
            {
            props.users.map( u => <div key={u.id}> 
                
                <div className={classes.global}>
                    <img className={classes.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9M0yIskiTRglVsMSBnAgJBJ9S_tmM_gvgQ&s" alt="ava" />
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