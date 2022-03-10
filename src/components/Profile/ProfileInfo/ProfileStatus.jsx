import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode=()=>{
        debugger;
        alert('key')
    }
    render() {
        return <>
            <div><span>Status: </span>
                {!this.state.editMode ?
                    <div><span onDoubleClick={()=>{
                        console.log('jj')}}>{this.props.status}</span></div>
                    : <div><input type="text" value={this.props.status}/></div>
                }
            </div>
        </>
    }
}

export default ProfileStatus;
