import React from 'react';
import UserLogin from '../components/UserLogin'
import '../UserLoginContainer.css'


function UserLoginContainer(props) {

  return (
    <div id="login-container">
      <h1>NoteRad</h1>
      <UserLogin
        setCurrentUser={props.setCurrentUser}
      />
    </div>
  )
}

export default UserLoginContainer
