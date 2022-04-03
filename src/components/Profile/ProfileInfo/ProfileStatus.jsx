import React from "react";
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    //LS
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let a = this.state.editMode;
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log('comDidUpdate')
    }


    render() {
        console.log('rendeeer')
        return <>
            <div><span>Status: </span>
                {!this.state.editMode ?
                    <div className={styles.profile__status}><p  title="Double click" onDoubleClick={this.activateEditMode}>{this.props.status || 'No'}</p></div>
                    : <div className={styles.profile__status}><input  onChange={this.onStatusChange} autoFocus={true}
                                  onBlur={this.deactivateEditMode} value={this.state.status}/></div>
                }
            </div>
        </>
    }
}

export default ProfileStatus;
