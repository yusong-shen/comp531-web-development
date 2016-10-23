/**
 * Created by yusong on 10/23/16.
 */
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const BootstrapNavbar = () => (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Ricebook</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="#/">Landing</NavItem>
                <NavItem eventKey={2} href="#/main">Main</NavItem>
                <NavItem eventKey={3} href="#/profile">Profile</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default BootstrapNavbar