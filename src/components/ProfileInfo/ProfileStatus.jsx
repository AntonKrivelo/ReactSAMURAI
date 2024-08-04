import React from "react";
import classes from "./ProfileInfo.module.css";



class ProfileStatus extends React.Component  {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
            this.setState ({
                status: e.currentTarget.value
            }); 
    }
    
    render () {
        return (
            <div className={classes.status}> 
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'New STATUS'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input className={classes.inputStatus} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}




export default ProfileStatus;