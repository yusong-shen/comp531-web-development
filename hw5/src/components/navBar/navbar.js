/**
 * Created by yusong on 10/23/16.
 */
import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const BootstrapNavbar = ({navItems}) => (
    <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Ricebook</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                {navItems.map((item) => {
                    return <NavItem key={navItems.indexOf(item)} href={item.link}>{item.title}</NavItem>
                })}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default BootstrapNavbar