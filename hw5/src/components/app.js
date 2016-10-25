/*
	High level presentation component for entire front-end applicaiton
	index > app > nav & view
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Main from './main/main'
import Profile from './profile/profile'
import Landing from './auth/landing'
import BootstrapNavbar from './navBar/navbar'
import Footer from './footer'

// routing logic to determine which view to display.
export const App = ({nextPage}) => {
    // decide  Child View according to nextPage state
    let Child = Landing
    switch (nextPage) {
        case 'MainPage':
            Child = Main
            break
        case 'ProfilePage':
            Child = Profile
            break
        default:
            Child = Landing
    }
    return (
        <div>
            <BootstrapNavbar/>
            <Child/>
            <Footer/>
        </div>
    )
}

App.propTypes = {
    nextPage: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        nextPage: state.navigate.nextPage
    }
}

const mapDispatchToProps = null


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)