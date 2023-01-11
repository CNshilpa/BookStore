import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(1)

      const handleClick2 = () => {
        if (counter > 1){
        setCounter(counter - 1)
        }
      }
      const handleClick1 = () => {
        setCounter(counter + 1)
      }
      
      
  return (
    <div>
       
        <Button ><RemoveCircleOutlineIcon  onClick={handleClick2}/> {counter} <AddCircleOutlineIcon onClick={handleClick1}/></Button>
    </div>
  )
}

export default Counter