import React from 'react';
import '../styles/navbar.css';

function Navbar({ currentPage, handlePageChange }) {
    return (
        <nav className={'navbar'}>
            <a
                href='#Home'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
                Homepage
            </a>

            <a
                href='#ProjectPage'
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
                Projects
            </a>

            <a
                href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact Me
            </a>
            
            <a
                href='#resume'
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </nav>
    )
}

export default Navbar;