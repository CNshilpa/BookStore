import React, {useReducer, useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';
import './Counter.css';


function Counter(props) {
  const initialState = 1
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}
const [count, dispatch] = useReducer(reducer, initialState)
  
return (
<div>
   
    <Button><RemoveCircleOutlineIcon  onClick={() => dispatch('decrement')} color="action"/> {count} <AddCircleOutlineIcon color="action"  onClick={() => dispatch('increment')}/></Button>

</div>
  )
}

export default Counter