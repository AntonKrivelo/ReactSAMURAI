import React from "react"
import classes from './FormControls.module.css';

export const textArea = ({input, meta, ...props}) => {
const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
            <textarea {...input} {...props} /> <br />
            { hasError && <span> {meta.error} </span> }  
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
        return (
            <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
                <input {...input} {...props} /> <br />
                { hasError && <span> {meta.error} </span> }  
            </div>
        )
    }