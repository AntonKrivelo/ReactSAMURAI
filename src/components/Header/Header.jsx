import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
            <header className={classes.header}>
            <NavLink> <img className={classes.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" />      
            </NavLink>       
            <NavLink className={classes.setting_icon}>
                <i className="fi fi-rr-settings"></i>   
            </NavLink> 
           
            <div className={classes.loginBlock}>
              {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>   }
                
            
            
            
            </div> 

            </header>
            
    )
}



export default Header;