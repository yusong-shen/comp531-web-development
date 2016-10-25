/**
 * Created by yusong on 10/23/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {navigate} from './../../action'

export const BootstrapNavbar = ({navItems, navigate}) => {
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
    navItems: PropTypes.arrayOf(PropTypes.shape({
        nextPage: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    navigate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        navItems: state.navItems
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

