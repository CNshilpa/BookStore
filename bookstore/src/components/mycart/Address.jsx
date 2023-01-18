import { Box, Button } from '@mui/material'
import React from 'react'
import './Address.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { putAddressApi } from '../../services/DataService';

function Address(props) {
    const [orders, setOrders] = useState(false)
    const [customerAddress, setCustomerAddress] = useState({ addressType: '', fullAddress: '', city: '', state: '' })

    const takeAddressType = (event) => {
        setCustomerAddress({
            ...customerAddress, addressType: event.target.value
        })
    }
    const takeFullAddress = (event) => {
        setCustomerAddress({
            ...customerAddress, fullAddress: event.target.value
        })
    }
    const takeCity = (event) => {
        setCustomerAddress({
            ...customerAddress, city: event.target.value
        })
    }
    const takeState = (event) => {
        setCustomerAddress({
            ...customerAddress, state: event.target.value
        })
    }
    const listenToOrders = () => {
        console.log(customerAddress)
        putAddressApi(customerAddress)
            .then((res) => {
                console.log(res)
                setOrders(true)
                props.listenToAddressDetails()
            }
            ).catch((error) => {
                console.log(error)
            })

    }

    return (
        <div >
            <Box className='address-box'>
                <p className='address-customer'>Customer Details</p>
                <Box><Button className='address-new' style={{ color: '#A03037', border: '1px solid #A03037' }}>Add New Address</Button></Box>
                <Box style={{ marginLeft: '-180px' }}>
                    <TextField className='address-name' style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="Full Name"
                    />
                    <TextField className='address-number' style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="Phone Number"
                    /></Box>
                <Box>
                    {/* <p className='address-work'>1.{type}</p> */}
                </Box>
                <Box>
                    <p className='address-p'>Address</p>
                    <TextField className='address-input' style={{ marginLeft: '-160px' }} onChange={takeFullAddress} />
                </Box>
                <Box>
                    <TextField className='address-city' style={{ marginLeft: '-160px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="City/Town"
                        onChange={takeCity}
                    />
                    <TextField className='address-state' style={{ marginLeft: '20px', width: '251px' }}
                        required
                        id="outlined-required"
                        label="State"
                        onChange={takeState}
                    />
                </Box>
                <Box>
                    <p className='address-home' >Type</p>
                </Box>
                <Box className='address-type' onClick={takeAddressType}>
                    <Box>
                        <input type="radio" name='type' id="Home" value="Home" />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Home </lable>
                    </Box>
                    <Box>
                        <input type="radio" name='type' id='Office' value='Office'  />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Office</lable>
                    </Box>
                    <Box>
                        <input type="radio" name='type' id='other' value='Other'  />
                        <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> other </lable>
                    </Box>
                </Box>
                {
                    orders ? null
                        :
                        <Box style={{ marginLeft: '600px', border: '1px solid #3371B5', width: '150px', borderRadius: '3px', marginTop: '60px' }}>
                            <Button fullWidth variant="contained" className='address-continue' onClick={listenToOrders}>CONTINUE</Button>
                        </Box>
                }

            </Box>
        </div>
    )
}

export default Address