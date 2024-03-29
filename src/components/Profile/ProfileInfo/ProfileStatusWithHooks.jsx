import React, {useEffect, useState} from "react";
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)

    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div>
        <span>Status: </span>
        {!editMode &&
        <div className={styles.profile__status}>
            <p title="Double click to change status" onDoubleClick={activateEditMode}>
                {props.status || 'No'}
            </p>
        </div>
        }
        {editMode &&
        <div className={styles.profile__status}>
            <input onChange={onStatusChange}
                   autoFocus={true}
                   onBlur={deactivateEditMode}
                   value={status}/></div>
        }
    </div>
}

export default ProfileStatusWithHooks;
