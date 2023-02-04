import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/idea_friday' activeStyle>
                        Idea Friday
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                    <NavLink to='/local_issues' activeStyle>
                        Local Issues
                    </NavLink>
                    <NavLink to='/funding_proposal' activeStyle>
                        Funding Proposal
                    </NavLink>
                    <NavLink to='/recognition' activeStyle>
                        Recognition
                    </NavLink>
                    <NavLink to='/sign_up' activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign_in'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
