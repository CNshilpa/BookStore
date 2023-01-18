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
import { Box } from '@mui/material';
import Pagination from '../../components/pagination/Pagination';
import Footer from '../../components/footer/Footer';


function HomePage() {
    const [headerToggle, setHeaderToggle] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [bookList, setBookList] = useState([])
    const [bookObjToggle, setBookObjToggle] = useState(false)
    const [input, setInput] = useState({})

    const [bookPosts, setBookPosts] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
    const listenToTakeBook = (detailsObj) => {
        setBookObjToggle(true)
        console.log(detailsObj)
        setInput(detailsObj)
        console.log(input.bookName, "particular book details")
        setBookPosts(true)
    }
    const listenToTakeBookDetails = () => {
        setBookObjToggle(false)
        setBookPosts(false)
    }

    const handleClick = () => {
        setOpen(!open);
    }
    const listenToHeader = () => {
        setHeaderToggle(!headerToggle)
    }

    useEffect(() => {
        getBookApi()
            .then(res => {
                console.log(res)
                setBookList(res.data.result)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])
    console.log(bookList, 'fetching array')
    console.log(currentPosts)

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

            <div style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px'}}>
                {
                    bookObjToggle ? <BookDetails listenToTakeBookDetails={listenToTakeBookDetails} id={input._id} bookName={input.bookName} author={input.author} quantity={input.quantity} discountPrice={input.discountPrice} price={input.price} description={input.description} /> : currentPosts.map((book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} /></Box>))

                }


            </div>

            {bookPosts ? null :
                (<Box style={{marginTop:'50px'}}>
                    <Pagination
                        totalPosts={bookList.length}
                        postsPerPage={postsPerPage}
                        paginate={paginate}
                        currentPosts={currentPosts} />
                </Box>)
            }

            <Box>
                <Footer/>
            </Box>
        </div>
    )
}

export default HomePage