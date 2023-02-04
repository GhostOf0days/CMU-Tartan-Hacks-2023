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
                    <NavLink to='/local_issues' activeStyle>
                        Local Issues
                    </NavLink>
                    <NavLink to='/funding_proposal_promotion' activeStyle>
                        Funding Proposal & Promotion
                    </NavLink>
                    <NavLink to='/sports' activeStyle>
                        Sports
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
