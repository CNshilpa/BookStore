import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../../components/header/Header'
import './HomePage.css';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Book from '../books/Book';
import { getBookApi } from '../../services/DataService';
import BookDetails from '../bookdetails/BookDetails';

function HomePage(props) {
    const [headerToggle, setHeaderToggle] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [bookList, setBookList] = useState([])
    const [bookObjToggle, setBookObjToggle] = useState(false)
   
    const listenToTakeBook = () =>
    {
        setBookObjToggle(true)
    }

    const listenToTakeBookDetails = () => {
        setBookObjToggle(false)
    }

    const handleClick = () => {
        setOpen(!open);
    }
    const listenToHeader = () => {
        setHeaderToggle(!headerToggle)
    }
    
    const getBook = () =>{
        getBookApi()
        .then(response => {
            console.log(response)
            setBookList(response.data.result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getBook()

    }, [])
    console.log(bookList, 'fetching array')


    return (

        <div>
            <PrimarySearchAppBar listenToHeader={listenToHeader} />
          
            <span><h3 className='home-books'>Books</h3></span>
            <List
                sx={{ width: '80%', maxWidth: 250, bgcolor: 'background.paper', marginLeft: '990px', marginTop: '-55px' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">

                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>

                    </ListItemIcon>
                    <ListItemText primary="Sort By relevance" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary="Sort By relevance" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            
            <div style={{width : '80vw' , height : 'auto' ,display : 'flex', flexDirection:'row',flexWrap:'wrap',marginLeft:'210px',gap: '15px 20px',marginTop:'15px'}}>
                {
                 bookObjToggle ?   <BookDetails listenToTakeBookDetails ={listenToTakeBookDetails}/> :  bookList.map((book) => (<Book  book={book} getBook={getBook} listenToTakeBook={listenToTakeBook} />))
                    
                }
               
                 
            </div>
           
        </div>
    )
}

export default HomePage