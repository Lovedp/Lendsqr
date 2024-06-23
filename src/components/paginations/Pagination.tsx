import React from 'react';
import './pagination.scss'
interface ListProps {
    postPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<ListProps> = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav>
            Showing
            <ul className='pagination'>
                {pageNumber.map((number) => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;