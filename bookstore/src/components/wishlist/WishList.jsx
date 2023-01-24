import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import PrimarySearchAppBar from '../header/Header'
import wishobj from '../../img/component (2).png'
import './WishList.css'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { getWishListApi, removeWishListItemApi } from '../../services/DataService'

function WishList() {
    const [wishList, setWishList] = useState([])

    const removeBooks = (id) => {
        let removeObj = {cartItem_id:id}
        removeWishListItemApi(removeObj)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    const getWishlist = () => {
        getWishListApi()
            .then((res) => {
                console.log(res)
                setWishList(res.data.result)
            }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        console.log("getting wishlist data")
    }
    console.log(wishList)
    

    useEffect(() => {
        getWishlist()
    }, [])
    console.log(wishList)

    return (
        <div>
            <Box>
                <PrimarySearchAppBar />
            </Box>
            <Box className='wish-main'>
                <Box style={{ fontWeight: 'bold', marginRight: '660px', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                    <p>My WishList(01)</p>
                </Box>
                {
                    wishList.map((book) =>
                    (<Box>

                        <Box className='wish-img'>
                            <img src={wishobj} alt='' />
                        </Box>
                        <Box className='wish-align'>
                            <Box>
                                <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}></p>
                                <p className='wish-author' style={{ opacity: '1', marginTop: '-10px' }} >By </p>
                            </Box>
                            <Box>
                                <p className='wish-rate' style={{ opacity: '1', marginTop: '-5px' }}>Rs.</p>
                                <p className='wish-price' style={{ opacity: '1', marginTop: '-33px' }}>Rs.</p>
                            </Box>
                        </Box>
                        <Box className='remove'>
                            <Button onClick={() => removeBooks(book.product_id._id)}>
                                <DeleteIcon sx={{ color: '#9D9D9D', marginLeft: '700px', marginTop: '-170px' }} />
                            </Button>
                        </Box>

                    </Box>))}
            </Box>
        </div>
    )
}

export default WishList