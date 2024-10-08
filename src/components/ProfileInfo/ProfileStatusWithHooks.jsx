import React from "react";
import classes from "./ProfileInfo.module.css";


const ProfileStatusWithHooks = (props) => {
 
    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status)



    React.useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    const activeMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

        return (
            <div className={classes.status}> 
                {!editMode &&
                    <div>
                        <span onClick={activeMode}>{props.status || '____________'}</span>
                    </div>
                }

                {editMode &&
                    <div>
                        <input value={status} onChange={onStatusChange} onBlur={deactivateMode} className={classes.inputStatus} autoFocus={true}   />
                    </div>
                }
            </div>
        )
    
}




export default ProfileStatusWithHooks;