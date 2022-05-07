import React from 'react';
import logo from '../../../images/logo.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='row'>
                    <div className='col'>
                        <img src={logo} alt="logo" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consectetur nemo nobis doloribus eveniet vitae tempore fugit optio odit alias eos quod, veniam saepe voluptatem perspiciatis modi doloremque ex. Quaerat!</p>
                    </div>

                    <div className='col'>
                        <h3>Links</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/product">Product</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/account">Account</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/product">Our Services</a></li>
                            <li><a href="account">Privay Policy</a></li>
                            <li><a href="/">Programme</a></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>Follow Us</h3>
                        <div className='footer__socials'>
                            <a href="https://www.linkedin.com/in/toseeb-nadaf/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/toseeb_1599/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                            <a href="https://twitter.com/toseeb_nadaf" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer