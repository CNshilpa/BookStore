import { Box, Button, Paper } from '@mui/material'
import React, { useState } from 'react'
import bookObj1 from '../../img/component (1).png';
import './Book.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';



function Book(props) {

    const bookObj = () =>{
        props.listenToTakeBook()
    }
    return (
        <Paper elevation={1} onClick={bookObj}>
            <Box className='book1'>

                <Box style={{backgroundColor: '#00000029'}} >
                <img src={bookObj1} alt='' style={{marginTop:'20px'}} />
                </Box>
                <Box style={{ alignItems: 'flex-start', display: 'flex', alignContent: 'flex-start', flexWrap: 'wrap', marginTop: '130px' }}>
                    <h5 className='book-name'>{props.book.bookName}</h5>
                    <h6 className='book-author'>By {props.book.author}</h6>
                    <Box style={{ width: '40px', height: '20px', backgroundColor: 'green', alignItems: 'center', marginLeft: '25px', marginTop: '-70px' }}><StarOutlineIcon size="small" style={{ marginLeft: '15px', marginTop: '-1px', color: 'white', size: 'small' }} />
                    <h6 style={{ marginTop: '-25px', marginLeft: '-20px', color: 'white' }}>4.5</h6>
                    <h6 className='book-rates'>(20)</h6>
                    </Box>
                    <h6 className='book-rate'>Rs.{props.book.discountPrice}
                        <Box className='book-price'>
                            ({props.book.price})
                        </Box>
                    </h6>
                </Box>

            </Box>

        </Paper>
    )
}

export default Book