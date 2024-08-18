import React, { useState, useContext } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext'

const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
        <h2 style={{ color: 'blue' }}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;