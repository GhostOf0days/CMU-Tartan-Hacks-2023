import React from 'react';
import './Navbar.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div to='/' className='head'>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                    <Link to='/' >
                        <img src={logo} className="logo"></img>
                    </Link>
                </a>


            </div>

            <div className='links'>
                <div to='#project' className='nav project'>First Idea Friday</div>
                <div to='#about' className='nav'>Local Issues</div>
                <div className='nav' href='/'>Events</div>
            </div>
        </div>
    );
};

export default Navbar;
