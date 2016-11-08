/**
 * Created by yusong on 10/23/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {navigate} from '../../actions/action'
import {logoutUser} from '../../actions/authActions'



export const BootstrapNavbar = ({curPage, navigate, logoutUser}) => {
    // decide the Navigation bar item according to nextPage state
    const mapNavItem = (item) => {
        if (item.title == 'Logout') {
            return (<NavItem id='logout' key={navItems.indexOf(item)}
                             onClick={() => {
                                 return logoutUser()
                             }}>
                {item.title}</NavItem>)
        } else {
            return (<NavItem id={item.title + 'Link'} key={navItems.indexOf(item)}
                             onClick={() => {
                                 return navigate(item.nextPage)
                             }}>
                {item.title}</NavItem>)
        }
    }
    let navItems = []
    switch (curPage) {
        case 'MainPage':
            navItems = [
                {nextPage: 'LandingPage', title: 'Logout'},
                {nextPage: 'ProfilePage', title: 'Profile'},
            ]
            break
        case 'ProfilePage':
            navItems = [
                {nextPage: 'LandingPage', title: 'Logout'},
                {nextPage: 'MainPage', title: 'Main'},
            ]
            break
        default:
            break
    }
    return (
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Ricebook</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {navItems.map(item => mapNavItem(item))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


BootstrapNavbar.protoTypes = {
    curPage: PropTypes.string.isRequired,
    navItems: PropTypes.arrayOf(PropTypes.shape({
        nextPage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    navigate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        curPage: state.navigate.nextPage,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        navigate: (nextPage) => {
            dispatch(navigate(nextPage))
        },
        logoutUser: () => {
            dispatch(logoutUser())
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BootstrapNavbar)

