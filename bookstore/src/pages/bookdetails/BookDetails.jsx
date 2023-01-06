import React from 'react'
import book1 from '../../img/component (2).png'
import './BookDetails.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function BookDetails(props) {
  return (
    <div className='bookdetails-main'>
<div className='bookdetails-submain'>
    <img src={book1} alt='' className='bookdetails-img'/>
    <div className='bookdetails-details' >
    <Button variant="ADD TO CART" style={{backgroundColor:'#8F2B2F', marginRight:'30px'}}>ADD TO CART</Button>
    <Button variant="WISHLIST" style={{backgroundColor:'#0A0102',color:'#FFFFFF', marginLeft:'10px'}}>WISHLIST</Button>
</div>
</div>
<div>
<Typography/>
                    
</div>
    </div>
  )
}

export default BookDetails