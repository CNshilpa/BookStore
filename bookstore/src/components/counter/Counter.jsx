import React, {useState} from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button } from '@mui/material';
import './Counter.css';


function Counter(props) {
  const [count, setCount] = useState(0)

  const handleClick2 = () =>{
    if (count > 0){
      setCount(count-1);
  } else {
      setCount(0);
  }
}
 
    const handleClick1 = () =>{  
      setCount(count+1);
    }
  
return (
<div>
   
    <Button><RemoveCircleOutlineIcon  onClick={handleClick2}/> {count} <AddCircleOutlineIcon onClick={handleClick1}/></Button>

</div>
  )
}

export default Counter