import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme) =>({
  input:{
    paddingLeft:20,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"white",
    width:"80%"
  }

}))
const AdminSignUp = ({setUser,setActive}) => {
  const classes = useStyles()
  const [email,setEmail] = useState('');
  const [password,setpassword] = useState('');
  

  const handleSignIn = () => {
    console.log(email)
  }
  return (
    <div>
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
      />
      <br />
      <Button onClick={() => {
          handleSignIn()
          setActive(1);
          setUser(1)
      }}>sign in</Button>


    </div>
  )
}

export default AdminSignUp