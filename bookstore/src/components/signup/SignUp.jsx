import React from 'react'
import Box from '@mui/material/Box';
import './SignUp.css'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { registerApi } from '../../services/UserService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fullNameRegex =  /^([A-Z]{1}[a-z,A-Z]{2,})$/;
const phoneRegex = /^([6-9]{1}[0-9]{9})$/;

function SignUp(props) {

    const [signUpObj,setsignUpObj] = React.useState({fullName : "",email : "",password : "",phone :""})

    const [regexObj,setregexObj] = React.useState({
        fullNameBorder : false, fullNameHelper : "",emailBorder : false , emailHelper : "",passwordBorder : false ,passwordHelper : "",  
        phoneBorder : false, phoneHelper : ""    
      })
  
      const takeEmail = (event) =>
    {
       console.log(event.target.value)
       setsignUpObj((prevState) =>({...prevState,email : event.target.value}))
    }
  
    const takePassword = (event) =>
    {
        setsignUpObj((prevState) =>({...prevState,password : event.target.value}))    
    }
    const takeName = (event) =>
    {
        setsignUpObj((prevState) =>({...prevState,fullName : event.target.value}))    
    }
    const takePhone = (event) =>
    {
        setsignUpObj((prevState) =>({...prevState,phone : event.target.value}))    
    }
  
    const submitObj = () => {
        props.listenToSignup()
      
    }
    const signupObj = () => {
        props.listenToSignin()
      
    }
const signUp = () =>{
    console.log("submit",signUpObj)
      let NameText = fullNameRegex.test(signUpObj.fullName)
      let emailText = emailRegex.test(signUpObj.email)
      let passwordText = passwordRegex.test(signUpObj.password)
      let phoneText = phoneRegex.test(signUpObj.phone)
      if(NameText === false)
      {
          setregexObj((prevState) => ({...prevState,fullNameBorder : true,fullNameHelper :"Enter correct Name"}))
      }
      else if(NameText === true)
      {
          setregexObj((prevState) => ({...prevState,fullNameBorder : false,fullNameHelper :""}))
      }
      if(emailText === false)
      {
          setregexObj((prevState) => ({...prevState,emailBorder : true,emailHelper :"Enter correct email"}))
      }
      else if(emailText === true)
      {
          setregexObj((prevState) => ({...prevState,emailBorder : false,emailHelper :""}))
      }
      if(passwordText === false)
      {
          setregexObj((prevState) => ({...prevState,passwordBorder : true,passwordHelper :"Enter correct password"}))
      }
      else if(passwordText === true)
      {
          setregexObj((prevState) => ({...prevState,passwordBorder : false,passwordHelper :""}))
      }
      if(phoneText === false)
      {
          setregexObj((prevState) => ({...prevState,phoneBorder: true,phoneHelper :"Enter correct phoneNumber"}))
      }
      else if(phoneText === true)
      {
          setregexObj((prevState) => ({...prevState,phoneBorder : false,phoneHelper :""}))
      }
      if(NameText === true && emailText === true && passwordText === true && phoneText === true)
      {
          registerApi(signUpObj).then((response) =>{console.log(response)}).catch((error) => {console.log(error)})

      }
}
    
    return (
        <Paper className='signup-main' elevation={4} >
            <Box elevation={4} className='signup-display'>
                <Box className='signup-login'>
                    <Button><h3 style={{ color: 'black' }} onClick={submitObj}>LOGIN</h3></Button>
                    <Button><h3 style={{ color: '#878787' }} onClick={signupObj}>SIGNUP</h3></Button>
                </Box>
                <Box className='signup-details'  >
                    <Box className='full-name'>
                        <span className='signup-name'>Full Name</span>
                        <TextField id="name" size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '30px', marginTop: '-10px' }} 
                        onChange={takeName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper}
                        />
                    </Box>
                    <Box className='signup-email'>
                        <span className='signup-email'>Email Id</span>
                        <TextField id="email" size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '30px', marginTop: '-10px' }} 
                        onChange={takeEmail}  error={regexObj.emailBorder} helperText={regexObj.emailHelper}/>
                    </Box>
                    <Box className='signup-password'>
                        <span className='signup-password'>Password</span>
                        <TextField size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '30px', marginTop: '-10px' }} 
                        onChange={takePassword}  error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}/>
                        <VisibilityOffIcon sx={{ position: 'relative', left: '85%', top: '-20%' }} />
                    </Box>
                    <Box className='signup-number'>
                        <span className='phone-number'>Mobile Number</span>
                        <TextField id="phone" size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '30px', marginTop: '-10px' }} 
                        onChange={takePhone}  error={regexObj.phoneBorder} helperText={regexObj.phoneHelper}/> 
                    </Box>
                </Box>
                <Box className='signup-others'>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={signUp}>SignUp</Button>
                </Box>

            </Box>

        </Paper>
    )
}

export default SignUp