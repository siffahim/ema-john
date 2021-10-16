import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <img style={{ width: '200px' }} src={logo} alt="" />
            <nav className='nav-item'>
                <a href="/">Shop</a>
                <a href="/">Order Review</a>
                <a href="/">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;