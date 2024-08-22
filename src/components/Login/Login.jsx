import React from "react"
import classes from "./Login.module.css"
import { Field, reduxForm } from "redux-form"
import { Input } from "../common/FormsControl/FormControls"
import { maxLengthCreator, minLengthCreator, requiredField } from "../../utils/validators/validators"


const LoginForm = (props) => {
    return (   
        <form onSubmit={props.handleSubmit} className={classes.formBlock}>
            <div>
                <Field placeholder="Login" name={"login"} type="text" component={Input} 
                validate={[requiredField, maxLengthCreator(25), minLengthCreator(5)]} />
            </div>
            <div>
                <Field placeholder="Password" name={"password"} type="text" component={Input} 
                validate={[requiredField, maxLengthCreator(25), minLengthCreator(5)]}
                />
            </div>
            <div>
                <Field className={classes.checkbox} name={"rememberMe"} type="checkbox" component={Input} />remember me
            </div>
            <div>
                <button className={classes.btnLog}>Log In</button>
            </div>
        </form>
        
    )
   
}

const LoginReduxForm = reduxForm({form: 'login'}) (LoginForm)

const Login = (props) => {
  
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h1 className={classes.header}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} /> 
        </div>
    )
}


export default Login;