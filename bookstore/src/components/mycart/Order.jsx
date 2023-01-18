import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Order.css'
import book1 from '../../img/component (2).png';
import { useNavigate } from 'react-router-dom';
import { addToOrderApi, cartItemListApi } from '../../services/DataService';

function Order() {
    const [bookOrder, setBookOrder] = useState([])
  

    const navigate = useNavigate()
    const orderPlaced = () => {
        let orderArr = []
        for (let item = 0; item < bookOrder.length; item++) {
            let orderList = {
                "product_id": bookOrder[item].product_id._id,
                "product_name": bookOrder[item].product_id.bookName,
                "product_quantity": bookOrder[item].product_id.quantityToBuy,
                "product_price": bookOrder[item].product_id.discountPrice,
            }
            orderArr.push(orderList);
            console.log(orderArr);
        }
       let orderObj = {orders:orderArr}

        addToOrderApi(orderObj).then(
            (response) => {
                console.log(response)
                // setBookOrder(true)
                navigate('/orderPlaced')
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const getCart = () => {
        cartItemListApi().then((res) => {
            console.log(res);
            setBookOrder(res.data.result) 
        }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log("Getting cart data")
    }
    console.log(bookOrder)

    useEffect(() => {
        getCart()
    }, [])
    return (
        <div>
            <Box className='order-box'>
                <p style={{ marginRight: '610px', opacity: '1' }}>Order Summary</p>
                {bookOrder.map((book) =>
                (<Box book={book}>
                    <Box style={{ height:'130px', justifyContent: 'space-between' }}>
                        <Box style={{ marginRight: '610px', marginTop: '20px', opacity: '1', justifyContent: 'space-between', flexDirection: 'column', columnGap: '40px' }}>
                            <img src={book1} alt='' className='order-img'  />
                        </Box>
                        <Box className='order-align'>
                            <Box>
                                <p style={{ fontWeight: 'bold', opacity: '1', marginTop: '-10px' }}>{book.product_id.bookName}</p>
                                <p className='order-author' style={{ opacity: '1', marginTop: '-10px' }} >By {book.product_id.author}</p>
                            </Box><Box>
                                <p className='order-rate' style={{ opacity: '1', marginTop: '-5px'  }}>Rs.({book.product_id.discountPrice})</p>
                                <p className='order-price' style={{ opacity: '1', marginTop: '-33px' }}>Rs.{book.product_id.price}</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>))}
                <Box style={{ marginLeft: '600px', border: '1px solid #3371B5', width: '150px', borderRadius: '3px', marginTop: '80px' }}>
                    <Button fullWidth variant="contained" className='address-continue' onClick={orderPlaced}>CHECKOUT</Button>
                </Box>


            </Box>
        </div>
    )
}

export default Order