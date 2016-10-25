/**
 * Created by yusong on 10/23/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {navigate} from './../../action'

export const BootstrapNavbar = ({curPage, navigate}) => {
    // decide the Navigation bar item according to nextPage state
    let navItems = []
    console.log(curPage)
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
            navItems = [
                {nextPage: 'LandingPage', title: 'Landing'},
                {nextPage: 'MainPage', title: 'Main'},
                {nextPage: 'ProfilePage', title: 'Profile'},
            ]
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
                    {navItems.map((item) => {
                        return (<NavItem key={navItems.indexOf(item)}
                            onClick={() => {
                                console.log(item.nextPage)
                                return navigate(item.nextPage)
                            }}>
                            {item.title}</NavItem>)
                    })}
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
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BootstrapNavbar)

