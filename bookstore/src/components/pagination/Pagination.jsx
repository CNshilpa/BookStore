import { Button } from '@mui/material';
import React from 'react'

const Paginations = ({ postsPerPage, totalPosts, currentPage, previousPage, nextPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='pagination'>

<Button onClick={previousPage} className="page-number">
               Prev
            </Button>
            {pageNumbers.map((page, index) => {
                return (
                    <Button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </Button>
                );
            })}
            <Button onClick={nextPage} className="page-number">
               Next
            </Button>

        </div>
    )
}
export default Paginations