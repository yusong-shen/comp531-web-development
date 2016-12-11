/*
	High level presentation component for entire front-end applicaiton
	index > app > nav & view
*/
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './main/main'
import Profile from './profile/profile'
import Landing from './auth/landing'
import BootstrapNavbar from './navBar/navbar'
import Footer from './footer'
import { initVisit } from './../actions/authActions'

class App extends React.Component {
    componentWillMount() {
        console.log('componentWillMount')
        this.props._initVisit()
    }

    render() {
        const nextPage = this.props.nextPage;
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
}

App.propTypes = {
    nextPage: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        nextPage: state.navigate.nextPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _initVisit : _ => {
            return initVisit()(dispatch)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)