import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import book1 from '../../img/component (2).png'
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import PrimarySearchAppBar from '../header/Header';
import './MyCart.css';
import { TextField } from '@mui/material';
import Address from './Address';
import Order from './Order';
import { RemoveBookFromCart, UpdateCartApi } from '../../services/DataService';

function MyCart() {

  const [hide, setHide] = useState(false)
  const [addressToggle, setAddressToggle] = useState(false)
  const [orderToggle, setOrderToggle] = useState(false)
  const [count, setCount] = useState(1);
  
  const placedOrder = () => {
    setHide(true)
    setAddressToggle(true)

  }
  const listenToAddress = () => {
    setAddressToggle(true)

  }
  const listenToAddressDetails = () => {
    setOrderToggle(true)
  }
  const listenToOrder = () => {
    setOrderToggle(true)
  }
  const listenToOrderDetails = () => {
    setOrderToggle(false)

  }
  const removeBook = (id) =>{
    RemoveBookFromCart(id).then((response) =>{
      console.log(response);
  }).catch((error) =>{
      console.log(error);
  })
}
const decrementQuantity = (id, quantity) =>{
  let input = {
      quantityToBuy: quantity-1,
  }
  if (quantity > 1){
      setCount(quantity-1);
  } else {
          setCount(1);
  }
  UpdateCartApi(id, input).then((response) =>{
      console.log(response);
      
  }).catch((error) =>{
      console.log(error);
  })
  console.log(input,"Input")
}

const incrementQuantity = (id, quantity) =>{
  
  let input = {
      quantityToBuy: quantity+1,
  }
  setCount(quantity+1);
  UpdateCartApi(id,input).then((response) =>{
      console.log(response);
      
  }).catch((error) =>{
      console.log(error);
  })
  console.log(input,"Input")
} 

  return (

    <Paper elevation={0}>
      <PrimarySearchAppBar />
      <Box >
        <Box >
          <Box style={{ width: '774px', height: '251px', border: '1px solid #DCDCDC', borderRadius: '1px', marginLeft: '180px', marginTop: '50px', background: '#FFFFFF 0% 0% no-repeat padding-box', opacity: '1' }}>

            <p style={{ marginRight: '630px', marginTop: '10px', fontWeight: 'bold', opacity: '1' }} >My cart  (1)</p>
            <Box className='mycart-icon' style={{ marginTop: '-8px', marginLeft: '490px', opacity: '1' }}><RoomIcon style={{ marginTop: '-8px' }} /> </Box>
            <Box><TextField sx={{ width: '30ch', height: '10ch', marginLeft: '460px', marginTop: '-45px', opacity: '1' }}>
            </TextField>
              <p style={{ marginLeft: '475px', marginTop: '-70px', opacity: '1' }}>BridgeLabz Solutions LLP, No...</p>
            </Box>
          </Box>
          <Box>
            <Box style={{ marginRight: '850px', marginTop: '-200px', opacity: '1' }}>
              <img src={book1} alt='' className='mycart-img' />
            </Box>
            <Box className='mycart-align'>
              <Box>
                <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}>Don't Make MeThink</p>
                <p className='mycart-author' style={{ opacity: '1', marginTop: '-10px', marginLeft: '13px' }} >By Steve Krug</p>
                <Box>
                  <p className='mycart-rate' style={{ opacity: '1', marginTop: '-5px', marginLeft: '-100px' }}>(2000)</p>
                  <p className='mycart-price' style={{ opacity: '1', marginTop: '-30px', marginLeft: '70px' }}>Rs.1500</p>
                </Box>
                <Box >
                  <div  >
                    <div>
                      <Box size="small" color="#DBDBDB" aria-label="add" sx={{ width: '30px', height: '20px', marginTop: '20px',marginLeft:'10px' }}  >
                        <RemoveCircleOutlinedIcon onClick={decrementQuantity}/>
                      </Box>
                      <Box className='mycart-box'>{count}</Box>
                      <Box size="small" color="#DBDBDB" aria-label="substract" sx={{ width: '30px', height: '20px', marginTop: '-45px', marginLeft: '70px' }} >
                        <AddCircleOutlinedIcon onClick={incrementQuantity} />
                      </Box>
                      <Box>
                        <Button style={{ marginLeft: '100px',marginTop:'-45px'}} onClick={removeBook}>Remove</Button>
                      </Box>
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box >
            {
              hide ? null
                :
                <Button variant="contained" onClick={placedOrder} sx={{ marginTop: '-180px', marginLeft: '330px' }}>Placed Order</Button>
            }

          </Box>
        </Box>
      </Box>
      {
        addressToggle ? <Address listenToAddressDetails={listenToAddressDetails} />
          :
          <Box style={{ width: '774px', height: '50px', borderRadius: '1px', marginLeft: '180px', marginTop: '-30px', border: '1px solid #DCDCDC' }}>
            <p className='mycart-address' listenToAddress={listenToAddress}>Address Details</p>
          </Box>
      }

      {
        orderToggle ? <Order listenToOrderDetails={listenToOrderDetails} />
          :
          <Box style={{ width: '774px', height: '50px', border: '1px solid #DCDCDC', borderRadius: '1px', marginLeft: '180px', marginTop: '10px' }}>
            <p className='mycart-order' listenToOrder={listenToOrder} >Order Summary</p>
          </Box>
      }

    </Paper>
  );
}
export default MyCart;
