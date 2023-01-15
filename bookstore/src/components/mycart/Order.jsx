import { Box, Button } from '@mui/material'
import React from 'react'
import './Order.css'
import book1 from '../../img/component (2).png';
import { useNavigate } from 'react-router-dom';

function Order() {
    
const navigate = useNavigate()
    const orderPlaced = () =>{
       navigate('/orderPlaced')
    }
   
    return (
        <div>
            <Box className='order-box'>
                <p style={{ marginRight: '610px', opacity: '1' }}>Order Summary</p>
                <Box style={{ marginRight: '610px', marginTop: '20px', opacity: '1' }}>
                    <img src={book1} alt='' className='order-img' />
                </Box>
                <Box className='order-align'>
                    <Box>
                        <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}>Don't Make MeThink</p>
                        <p className='order-author' style={{ opacity: '1', marginTop: '-10px', marginLeft: '1px' }} >By Steve Krug</p>
                    </Box><Box>
                        <p className='order-rate' style={{ opacity: '1', marginTop: '-5px', marginLeft: '-40px' }}>(2000)</p>
                        <p className='order-price' style={{ opacity: '1', marginTop: '-30px', marginLeft: '60px' }}>Rs.1500</p>
                    </Box>
                </Box>
                    <Box style={{ marginLeft: '600px', border: '1px solid #3371B5', width: '150px', borderRadius: '3px',marginTop:'80px' }}>
                    <Button fullWidth variant="contained" className='address-continue' onClick={orderPlaced}>CHECKOUT</Button>
                </Box>
                
                
            </Box>
        </div>
    )
}

export default Order