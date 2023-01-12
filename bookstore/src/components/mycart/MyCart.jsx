import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import book1 from '../../img/component (2).png'
import { useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import RoomIcon from '@mui/icons-material/Room';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import PrimarySearchAppBar from '../header/Header';
import './MyCart.css';

function MyCart(props) {
 
  
  const [locate, setLocate] = React.useState('');

  const handleChange = (event) => {
    setLocate(event.target.value);
  };




  return (

    <Paper elevation={0}>
      <PrimarySearchAppBar/>
      <Box >
        <Box >
          <Box style={{width:'700px', height:'250px', border: '1px solid #707070',borderRadius:'1px',marginLeft:'180px', marginTop:'50px'}}>

            <span style={{marginRight:'550px'}} >My cart  (1)</span>
            <Box className='mycart-icon'><RoomIcon /> </Box>
            <Box className='maycart-p'><h6 style={{marginLeft:'350px', marginTop:'-20px'}}>BridgeLabz Solutions LLP, No...</h6></Box>
            <Box>
               <Box style={{marginTop:'20px', marginLeft:'400px'}}> </Box>
                <Select className='mycart-select'
                
                  onChange={handleChange}
                >
                  
                </Select>
                
            </Box>
          </Box>
            <Box style={{marginRight:'850px', marginTop:'-200px'}}>
            <img src={book1} alt='' />
            </Box>
            <Box className='mycart-align'>
            <Box>
              <p style={{ fontWeight: 'bold', opacity: '1',marginTop:'-10px' }}>Don't Make MeThink</p>
              <p className='mycart-author' style={{ opacity: '1',marginTop:'-10px', marginLeft:'1px' }} >By Steve Krug</p>
              <Box>
                <p className='mycart-rate' style={{ opacity: '1',marginTop:'-5px', marginLeft:'-100px' }}>(2000)</p>
                <p className='mycart-price' style={{ opacity: '1',marginTop:'-30px',marginLeft:'60px'}}>Rs.1500</p>
              </Box>
              <Box >
                <div  >
                  <div>
                    <Box size="small" color="#DBDBDB" aria-label="add" sx={{ width: '30px', height: '20px',marginTop:'20px' }}  >
                      <RemoveCircleOutlinedIcon />
                    </Box>
                    <Box className='mycart-box'></Box>
                    <Box size="small" color="#DBDBDB" aria-label="substract" sx={{ width: '30px', height: '20px', marginTop:'-45px',marginLeft:'70px' }} >
                      <AddCircleOutlinedIcon />
                    </Box>
                  </div>
                </div>
              </Box>
            </Box>
            </Box>
          <Box >
            <Button variant="contained" onClick={''} sx={{marginTop:'-150px',marginLeft:'170px'}}>Placed Order</Button>  
          </Box>
        </Box>
      </Box>
      <Box style={{width:'700px', height:'50px', border: '1px solid #707070',borderRadius:'1px',marginLeft:'180px', marginTop:'-30px'}}></Box>
      <Box style={{width:'700px', height:'50px', border: '1px solid #707070',borderRadius:'1px',marginLeft:'180px', marginTop:'10px'}}></Box>
    </Paper>
  );
}
export default MyCart;
