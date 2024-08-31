import React from "react"
import classes from "./Login.module.css"
import style from "../common/FormsControl/FormControls.module.css"
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControl/FormControls"
import { maxLengthCreator, minLengthCreator, requiredField } from "../../utils/validators/validators"
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer"
import { redirect } from "react-router-dom";

const LoginForm = (props) => {
    return (   
        <form onSubmit={props.handleSubmit} className={classes.formBlock}>
            <div>
                <Field placeholder="Email" name={"email"} type="text" component={Input} 
                validate={[requiredField, maxLengthCreator(25), minLengthCreator(5)]} />
            </div>
            <div>
                <Field placeholder="Password" name={"password"} type="password" component={Input} 
                validate={[requiredField, maxLengthCreator(25), minLengthCreator(5)]}
                />
            </div>
            <div>
                <Field className={classes.checkbox} name={"rememberMe"} type="checkbox" component={Input} />remember me
            </div>
           
           
           { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>  
           }  
            <div>
                <button className={classes.btnLog}>Log In</button>
            </div>
        </form>
        
    )
   
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <redirect to={"/profile"} /> 
    }

    return (
        <div>
            <h1 className={classes.header}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} /> 
        </div>
    )
}


const mapStateToProps = (state) => ({
     isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);