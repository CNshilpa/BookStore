import { Box, Button } from '@mui/material'
import React from 'react'
import PrimarySearchAppBar from '../header/Header'
import order from '../../img/unnamed.jpg';
import './OrderPlaced.css';
import { useNavigate } from 'react-router-dom';

function OrderPlaced() {
    
    const navigateOne = useNavigate()
    const openOrder = ()=>{
       navigateOne('/homePage')
    }
    

    
    return (
        <div className='order-main'>
            <PrimarySearchAppBar />
            <Box className='order-one'>
            <Box>
                <img src={order} alt='' />
            </Box>
            <p className='order-param'>
                <p>hurray!!! your order is confirmed </p>
                <p>the order id is #123456 save the order id for</p>
                <p>further communication..</p>
            </p>
            <Box className='orders-box'>
                <table className='order-table'>
                    <thead>
                        <tr className='order-tr'>
                            <th className='order-tr'>Email us</th>
                            <th className='order-tr'>Contact us</th>
                            <th className='order-tr'>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='order-tr1'>
                            <td className='order-tr1'>admin@bookstore.com</td>
                            <td className='order-tr1'>+91 8163475881</td>
                            <td className='order-tr1'>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                near Kumarakom restaurant, HSR Layout, Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
            <Box>
             <Button variant="contained" onClick={openOrder}  sx={{background:' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px'}}>Continue Shopping</Button>
             </Box>
             </Box>
        </div>
    )
}

export default OrderPlaced