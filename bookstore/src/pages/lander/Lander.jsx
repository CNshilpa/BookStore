import React, { useState } from 'react'
import Box from '@mui/material/Box';
import './Lander.css';
import Paper from '@mui/material/Paper';
import book from '../../img/component.png';
import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/SignUp';

function Lander(props) {
    const [toggleSignin, setToggleSignin] = useState(false)

    const listenToSignin = () => {
        setToggleSignin(true)
    }
    const listenToSignup = () => {
        setToggleSignin(false)
    }
    
    return (
        <Paper className='lander-Main' elevation={4} sx={{ backgroundColor: '#9e9e9e' }}>
            <Box elevation={4} className='lander-img'>
                <img className='lander-image' id='image' src={book} alt="image1" width='10%' height='10%' />
                <p className='lander-image-p'>Online Book Shopping</p>
            </Box>
            {
                toggleSignin ? <SignUp listenToSignup={listenToSignup} /> : <SignIn listenToSignin={listenToSignin} />
            }
           
        </Paper>
    )
}

export default Lander