import React, { useState } from 'react'
import book1 from '../../img/component (2).png'
import book2 from '../../img/component (10).png'
import './BookDetails.css';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { addToCartApi, addToWishlistApi, UpdateCartApi } from '../../services/DataService';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';


function BookDetails(props) {
    const [wishListToggle, setWishListToggle] = useState(false)
    const [cartToggle, setCartToggle] = useState(false)
    const [count, setCount] = useState(1);

    const addCart = () => {
        setCartToggle(true)
        let id = {
            product_id: props.id
        }
        console.log(id)
        addToCartApi(id)
            .then(res => {
                console.log(res)

            })
            .catch(error => {
                console.log(error)
            })
    }
    const addWishList = () => {
        setWishListToggle(true)
        let id = {
            product_id: props.id
        }
        console.log(id)
        addToWishlistApi(id)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const decrementQuantity = () => {
        let input = {
            quantityToBuy: count - 1,
        }
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(1);
        }
        UpdateCartApi(props.id, input).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        })
        console.log(input, "Input")
    }

    const incrementQuantity = () => {

        let input = {
            quantityToBuy: count + 1,
        }
        setCount(count + 1);
        UpdateCartApi(props.id, input).then((response) => {
            console.log(response);

        }).catch((error) => {
            console.log(error);
        })
        console.log(input, "Input")
    }

    return (
        <div className='bookdetails-main'>
            <div>
                <img src={book1} alt='' className='book1-img' style={{ marginLeft: '15px', border: '1px solid #7C1E1E' }} />
            </div>
            <div>
                <img src={book2} alt='' className='book2-img' style={{ marginTop: '50px', marginLeft: '-45px' }} />
            </div>
            <div className='bookdetails-submain'>
                <img src={book1} alt='' className='bookdetails-img' />
                <div className='bookdetails-details' >
                    {
                        cartToggle ? (
                            <Box>
                                <Box>
                                    <Box onClick={() => decrementQuantity(props._id)} style={{ marginLeft: '-90px', marginTop: '10px' }}>
                                        <RemoveCircleOutlinedIcon />
                                    </Box>
                                    <p style={{ marginTop: '-25px', marginLeft: '-50px' }}>{count}</p>
                                    <Box onClick={() => incrementQuantity(props._id)} style={{ marginTop: '-40px', marginLeft: '-10px' }} >
                                        <AddCircleOutlinedIcon />
                                    </Box>
                                </Box>
                            </Box>
                        ) :
                            <Button variant="contained" style={{ backgroundColor: '#8F2B2F', marginRight: '30px' }} onClick={addCart}>ADD TO CART</Button>
                    }
                </div>
                <div className='bookDetails-wishlist'>
                    {
                        wishListToggle ? <Button variant="contained" className='addIcon' startIcon={<FavoriteIcon sx={{ color: 'red' }} />} style={{ backgroundColor: '#373434' }}></Button>
                            :
                            <Button onClick={addWishList} variant="contained" className='addIcon' style={{ backgroundColor: '#373434' }} startIcon={<FavoriteIcon sx={{ color: 'red' }} />} >WISHLIST</Button>

                    }

                </div>
            </div>
            <div style={{ marginTop: '-20px', alignItems: 'flex-start' }}>
                <div className='bookdetails-align'>
                    <p style={{ marginBottom: '100px', fontWeight: 'bold', opacity: '1' }}>{props.bookName}</p>
                    <p style={{ marginTop: '-90px', alignItems: 'flex-start', opacity: '1', font: 'normal normal normal 15px/13px Roboto', color: '#333232' }}>by {props.author}</p>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'flex-start', marginLeft: '1px', marginTop: '-10px' }}>
                        <StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small' }} />
                        <h6 style={{ marginTop: '-25px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                        <h6 className='bookdetails-rates'>({props.quantity})</h6>
                    </Box>
                    <h6 className='bookdetails-rate' >Rs.{props.discountPrice}
                        <Box className='bookdetails-price'>
                            ({props.price})
                        </Box>
                    </h6>
                    <Box className='bookdetails-typography'>
                        <p style={{  marginTop: '20px', font: 'normal normal normal 15px/13px Roboto', color: '#333232',fontWeight:'bold' }}>Book Detail</p>
                          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sunt itaque laborum nostrum laudantium porro reiciendis
                            libero doloribus officia suscipit doloremque at quis quia,
                            culpa ipsum numquam nemo soluta, minima temporibus?
                        </p>
                    </Box>
                    <Box style={{ marginTop: '10px', font: 'normal normal normal 15px/13px Roboto', color: '#333232', marginLeft: '2px' }}>
                        <h4>Customer Feedback</h4>
                        <Typography component="legend">Overall rating</Typography>
                        <Rating name="no-value" value={null} />
                    </Box>
                    {/* <Box>
                    <Button variant="contained" style={{ marginTop: '20px', left: '600px', font: 'normal normal normal 14px/19px Roboto;', color: '#FFFFFF', textAlign: 'left', textTransform: 'capitalize' }} onClick={''}>Submit</Button>
                </Box> */}
                </div>
            </div>

        </div>
    )
}

export default BookDetails