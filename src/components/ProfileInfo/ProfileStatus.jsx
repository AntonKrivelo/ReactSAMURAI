import React from "react";
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component  {
    state = {
        editMode: false,
        
    }

    activateEditMode = () => {
        this.setState ({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState ({
            editMode: false
        });
    }
    
    render () {
        return (
            <div className={classes.status}> 
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}




export default ProfileStatus;