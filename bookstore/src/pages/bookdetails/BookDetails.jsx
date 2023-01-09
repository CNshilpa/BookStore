import React, { useState } from 'react'
import book1 from '../../img/component (2).png'
import book2 from '../../img/component (10).png'
import './BookDetails.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { addToCartApi, addToWishlistApi } from '../../services/DataService';



function BookDetails(props) {
    const [wishList, setWishList] = useState([])
    const [cart, setCart] = useState([])


    const addCart = () => {
        addToCartApi(cart)
            .then(res => {
                console.log(res)
                setCart(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const addWishlist = () => {

        addToWishlistApi(wishList)
            .then(res => {
                console.log(res)
                setWishList(res.data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const submit = () => {
        
    }

    return (
        <div className='bookdetails-main'>
            <div>
                <img src={book1} alt='' className='book1-img' style={{ marginLeft: '10px', border: '1px solid #7C1E1E' }} />
            </div>
            <div>
                <img src={book2} alt='' className='book2-img' style={{ marginTop: '50px', marginLeft: '-40px' }} />
            </div>
            <div className='bookdetails-submain'>
                <img src={book1} alt='' className='bookdetails-img' />
                <div className='bookdetails-details' >
                    <Button variant="ADD TO CART" style={{ backgroundColor: '#8F2B2F', marginRight: '30px' }} onClick={addCart}>ADD TO CART </Button>

                    <Button variant="WISHLIST" style={{ backgroundColor: '#0A0102', color: '#FFFFFF', marginLeft: '10px' }} onClick={addWishlist}>WISHLIST</Button>
                </div>
            </div>
            <div style={{ marginTop: '-20px' }}>
                <p style={{ marginBottom: '100px', marginLeft: '20px', fontWeight: 'bold', opacity: '1' }}>DON'T MAKE ME THINK</p>
                <p style={{ marginTop: '-90px', marginLeft: '-70px', opacity: '1', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>by Steve Krug</p>
                <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'center', marginLeft: '25px', marginTop: '-10px' }}>
                    <StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small' }} />
                    <h6 style={{ marginTop: '-25px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                    <h6 className='bookdetails-rates'>(20)</h6>
                </Box>
                <h6 className='bookdetails-rate'>Rs.1500
                    <Box className='bookdetails-price'>
                        (Rs.2000)
                    </Box>
                </h6>
                <Box className='bookdetails-typography'>
                    <p style={{ marginLeft: '-580px', marginTop: '20px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>Book Detail</p>
                </Box>
                <Box style={{ marginTop: '-10px', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>
                    <h4>Customer Feedback</h4>
                    <Typography component="legend">Overall rating</Typography>
                    <Rating name="no-value" value={null} />
                </Box>
                <Box>
                    <Button variant="contained" style={{ marginTop: '20px', left: '600px', font: 'normal normal normal 14px/19px Roboto;', color: '#FFFFFF', textAlign: 'left', textTransform: 'capitalize' }} onClick={submit}>Submit</Button>
                </Box>
            </div>

        </div>
    )
}

export default BookDetails