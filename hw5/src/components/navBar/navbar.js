/**
 * Created by yusong on 10/23/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {navigate} from './../../action'

export const BootstrapNavbar = ({navItems}) => {
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
                            onClick={() => navigate(item.nextPage)}>
                            {item.title}</NavItem>)
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

// ToDoItem.propTypes = {
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     done: PropTypes.bool.isRequired,
//     toggle: PropTypes.func.isRequired,
//     remove: PropTypes.func.isRequired
// }
//
// export default connect(null, (dispatch, ownProps) => {
//     return {
//         remove: () => dispatch({ type: 'REMOVE_TODO', id: ownProps.id }),
//         toggle: () => dispatch({ type: 'TOGGLE_TODO', id: ownProps.id })
//     }
// })(ToDoItem)

BootstrapNavbar.protoTypes = {
    navigate: PropTypes.func.isRequired
}

const mapStateToProps = null

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

