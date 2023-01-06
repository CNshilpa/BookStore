import React from 'react'
import './signin.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { loginApi } from '../../services/UserService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function SignIn(props) {

    const [signInObj, setsignInObj] = React.useState({ email: "", password: "" })
    const [regexObj, setregexObj] = React.useState({
        emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: ""
    })

    const takeEmail = (event) => {
        console.log(event.target.value)
        setsignInObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const takePassword = (event) => {
        setsignInObj((prevState) => ({ ...prevState, password: event.target.value }))

    }
    const submit = () => {
        props.listenToSignin()

    }
    const signinObj = () => {
        props.listenToSignup()

    }
    const login = () => {
        console.log("submit", signInObj)
        let emailText = emailRegex.test(signInObj.email)
        let passwordText = passwordRegex.test(signInObj.password)
        if (emailText === false) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct email" }))
        }
        else if (emailText === true) {
            setregexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }

        if (passwordText === false) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: true, passwordHelper: "Enter correct password" }))
        }
        else if (passwordText === true) {
            setregexObj((prevState) => ({ ...prevState, passwordBorder: false, passwordHelper: "" }))
        }

        if (emailText === true && passwordText === true) {
           loginApi(signInObj).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.result.accessToken);

            })
                .catch((error) => { console.log(error) })

        }

    }

    return (
        <Paper className='signin-main' elevation={4}>
            <Box elevation={4} className='signin-display'>
                <Box className='signin-login'>
                    <Button><h3 style={{ color: 'black' }} onClick={signinObj} >LOGIN</h3></Button>
                    <Button><h3 style={{ color: '#878787' }} onClick={submit}>SIGNUP</h3></Button>
                </Box>
                <Box className='signin-details'  >
                    <Box className='signin-email'>
                        <span className='signin-email'>Email Id</span>
                        <TextField id="email" size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '25px', marginTop: '-10px' }} onChange={takeEmail}
                            error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                        />
                    </Box>
                    <Box className='signin-password'>
                        <span className='signin-email'>Password</span>
                        <TextField size='small' variant="outlined" sx={{ width: '100%', borderRadius: '2px', height: '25px', marginTop: '-5px' }} onChange={takePassword}
                            error={regexObj.passwordBorder} helperText={regexObj.passwordHelper}
                        />

                        <VisibilityOffIcon sx={{ position: 'relative', left: '85%', top: '-20%' }} />
                        <p className='signin-password-p' >Forgot password?</p>
                    </Box>
                </Box>
                <Box className='signin-others'>
                    <Button variant="contained" sx={{ backgroundColor: '#b71c1c', width: '70%' }} onClick={login}>Login</Button>
                    <h5>OR</h5>
                </Box>
                <Box className='signin-fbgoogle'>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="contained" sx={{ color: 'black', backgroundColor: '#f5f5f5' }}>Google</Button>
                </Box>

            </Box>

        </Paper>
    )
}


export default SignIn