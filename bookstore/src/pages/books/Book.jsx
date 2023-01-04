import { Box, Paper } from '@mui/material'
import React from 'react'
import bookObj from '../../img/component (1).png';
import './Book.css';
import Rating from '@mui/material/Rating';

function Book() {
    return (
        <Paper className='book-main' elevation={4}>
            <Box>
                <Box className='book-img'>
                    <img src={bookObj} alt='' />
                </Box>
                <Box className='book-details'>
                    <p><h6>Don't Make Me Think</h6></p>
                    <Box className='book-rating'><Rating name="size-small" defaultValue={4.3} size="small" /></Box>
                    <p className='book-rate'><h6>Rs.1500</h6></p>
                </Box>
            </Box>
        </Paper>
    )
}

export default Book