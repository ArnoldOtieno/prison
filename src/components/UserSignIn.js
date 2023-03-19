import React, { useState } from 'react';
import Login from './Login';
import { Register } from './Register';



const UserSignIn = ({setActive,setUser}) => {
  const[currentform, setCurrentform]=useState("login");
  const toggleForm=(formName)=>{
    setCurrentform(formName);
  }
  return (
    <div>
      {currentform==="login"?  <Login onFormSwitch={toggleForm} setActive={setActive} setUser={setUser}/> :
       <Register onFormSwitch={toggleForm} setUser={setUser} setActive={setActive}/>}
    </div>
  )
}

export default UserSignIn