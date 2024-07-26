import React from "react"
import classes from "./Login.module.css"


const Login = (props) => {
    return (
        <div>
            <button className={classes.btnIn}>Sign In</button>
            <button className={classes.btnUp}>Sign Up</button>
        </div>
    )
        
}




export default Login;