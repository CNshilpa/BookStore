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
import Footer from '../../components/footer/Footer';
import Paginations from '../../components/pagination/Pagination';


function HomePage() {
   
    const [open, setOpen] = React.useState(false);
    const [bookList, setBookList] = useState([])
    const [bookObjToggle, setBookObjToggle] = useState(false)
    const [input, setInput] = useState({})

    const [bookPosts, setBookPosts] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const [searchInput, setSearchInput] = useState('');

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = bookList.slice(indexOfFirstPost, indexOfLastPost);


    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(bookPosts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
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

    useEffect(() => {
        getBookApi()
            .then(res => {
                console.log(res)
                if (searchInput) {
                    let filterBook = res.data.result.filter(book => book.bookName.toLowerCase().includes(searchInput.toLocaleLowerCase()))
                    setBookList(filterBook)
                }
                else {
                    setBookList(res.data.result)
                }

            })
            .catch(error => {
                console.log(error)
            })

    }, [searchInput])
    console.log(bookList, 'fetching array')


    const searchBook = (value) => {
        setSearchInput(value)
    }

    const autoRefresh =()=>{
        getBookApi()
    }
    return (

        <div >
            <PrimarySearchAppBar searchInput={searchBook} />

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

            <div className='book' style={{ width: '80vw', height: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '210px', gap: '15px 20px', marginTop: '15px' }}>
                {
                    bookObjToggle ? <BookDetails listenToTakeBookDetails={listenToTakeBookDetails} id={input._id} bookName={input.bookName} author={input.author} quantity={input.quantity} discountPrice={input.discountPrice} price={input.price} description={input.description} />
                        :
                        currentPage === 1 ?
                        bookList.filter((book) => {
                            if (searchInput === "") {
                                return book
                            }
                            else if (book.bookName.toLowerCase().includes(searchInput.toLowerCase())) {
                                return book
                            }
                        }).slice(0, 4).map(
                            (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autorefresh={autoRefresh} /></Box>))
                         :
                       currentPage === 2 ?
                       bookList.slice(4, 8).map(
                                (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autorefresh={autoRefresh}/></Box>))
                             :
                         currentPage === 3 ?
                            bookList.slice(8, 12).map(
                                    (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autorefresh={autoRefresh}/></Box>))
                                 :
                              currentPage === 4 ?
                                bookList.slice(12, 16).map(
                                        (book) => (<Box onClick={() => listenToTakeBook(book)}><Book key={book._id} book={book} autorefresh={autoRefresh}/></Box>))
                                     :
                                    null

                       

                }


            </div>

            {bookPosts ? null :
                (<Box style={{ marginTop: '50px' }} className='pagination'>
                    <Paginations
                        postsPerPage={postsPerPage}
                        totalPosts={bookList.length}
                        previousPage={previousPage}
                        nextPage={nextPage}
                        setCurrentPage={setCurrentPage}
                        currentPosts={currentPosts}
                        onChange={(e, value) => currentPosts(value)} />
                </Box>)
            }

            <Box className='footer'>
                <Footer />
            </Box>
        </div>
    )
}

export default HomePage