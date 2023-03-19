import { TextField} from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles} from '@mui/styles'
import { Button } from '@mui/material'

const useStyles = makeStyles((theme) =>({
  input:{
    paddingLeft:20,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"white",
    width:"80%"
  },
  onFormSwitch:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",

  }

}))
const Login = ({setActive,onFormSwitch,setUser}) => {
  const classes = useStyles()
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');
  

  const handlesubmit = () =>{
    console.log(email)
  }
  return (
    <div>
        <h2>Login</h2>
      <TextField 
        variant='outlined'
        placeholder='enter your email'
        required
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={classes.input}
        label="enter your email"
      /><br /><br />
      <TextField 
        variant='outlined'
        placeholder='Enter your password'
        required
        type='password'
        value={password}
        onChange={(event) => setpassword(event.target.value)}
        className={classes.input}
        label="Enter your password"
      /><br /><br />
      <Button onClick={() => {
        handlesubmit()
        setActive(1);
        setUser(0)
        
      }}>sign in</Button>
      <div className={classes.onFormSwitch}>
        <span>Don't have an account? </span><span>
        <button className="link-btn" onClick={()=> onFormSwitch('register')}>Register here</button>
        </span>
        
      </div>
      
      
      {/* <h2>Login</h2>
             <Text
            <form className={classes.from} onSubmit={handlesubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="enter your email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
            <button type="submit">Log in</button>
        </form>
          </div> */}


    </div>
  )
}

export default Login