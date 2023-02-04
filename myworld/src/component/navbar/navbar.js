import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div to='/' className='head'>
        <h1>An<span>Qi.</span> is carrying us</h1>
        </div>

        <div className='links'>
            <div to='#project' smooth className='nav project'>Project</div>
            <div to='#about' smooth className='nav'>About</div>
            <div className='nav' href='/'>Resume</div>
        </div>
        </div>
    );
};

export default Navbar;
