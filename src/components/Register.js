import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, {useContext, useState} from "react"
import { auth, db } from "../api/firebase";
export const Register=({onFormSwitch,setUser,setActive})=>{
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[pass, setPass]=useState("");
    const[passOne,setPassOne] = useState('');
    const handlesubmit=async()=>{
        const res= createUserWithEmailAndPassword(auth,email,pass)
        setDoc(doc(db,"wardens",(await res).user.uid),{
          fullName:name,
          email:email,
          password:pass,
          status:true,
        })
    }
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <label htmlFor="name">Enter Full name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter your name" id="name" name="name" />
            <br />
            <label htmlFor="email">Enter your email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email" />
            <br />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password" />
             <br />
             <label htmlFor="password">confirm password</label>
            <input value={passOne} onChange={(e)=>setPassOne(e.target.value)} type="password" placeholder="confirm  your password" id="password" name="password" />
       
          <br />
        <button onClick={() => {
                handlesubmit()
                setActive(1);
                setUser(0)
            }}>sign up</button>
            <br />
        <button className="link-btn" onClick={()=> onFormSwitch('login')}>Already have an account? log in here</button>
        
        </div>
        
    );

}