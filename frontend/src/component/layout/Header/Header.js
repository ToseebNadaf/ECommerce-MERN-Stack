import React from 'react';
import logo from '../../../images/logo.png';
import './Header.css';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdAccountBox } from 'react-icons/md';

const Header = () => {
    return (
        <header>
            <div>
                <input type="checkbox" id="active" />
                <label htmlFor="active" className="menu-btn"><span></span></label>
                <label htmlFor="active" className="close"></label>
                <div className="wrapper">
                    <ul>
                        <li><img src={logo} alt="logo" /></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>

                        <div className="icons">
                            <a href="/search"><BsSearch className="icons__logo" /></a>
                            <a href="/cart"><AiOutlineShoppingCart className="icons__logo" /></a>
                            <a href="/login"><MdAccountBox className="icons__logo" /></a>
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header