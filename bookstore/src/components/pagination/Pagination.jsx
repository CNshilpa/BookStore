import { Button } from '@mui/material';
import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div >
            <ul >
                {pageNumbers.map((number) => (
                    <Button showFirstButton showLastButton
                        key={number}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </Button>
                ))}
            </ul>
        </div>
    )
}
export default Pagination