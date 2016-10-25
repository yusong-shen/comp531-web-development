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
import {setNavItems} from './../action'

// // routing logic to determine which view to display.
// class App extends React.Component {
//
//     constructor(props) {
//         super(props)
//         this.state = {
//             // a route state variable and then selectively
//             // display a Component based on the value
//             route : window.location.hash.substr(1)
//         }
//     }
//
//     componentDidMount() {
//         window.addEventListener('hashchange', () => {
//             this.setState({
//                 route: window.location.hash.substr(1)
//             })
//             // console.log(this.state.route)
//         })
//     }
//
//     // Additionally we might have compound views, including a navigation section
//     render() {
//         // As the hash portion of the URL changes, <App> will render
//         // a different <Child> by branching on this.state.route
//         let Child
//         let navItems = [
//             {link: '#/main', title: 'Main'},
//             {link: '#/profile', title: 'Profile'},
//         ]
//         switch (this.state.route) {
//             case '/main':
//                 Child = Main;
//                 navItems = [
//                     {link: '#/', title: 'Logout'},
//                     {link: '#/profile', title: 'Profile'},
//                 ]
//                 break;
//             case '/profile':
//                 Child = Profile;
//                 navItems = [
//                     {link: '#/', title: 'Logout'},
//                     {link: '#/main', title: 'Main'},
//                 ]
//                 break;
//             default: Child = Landing;
//         }
//         return (
//             <div>
//                 <BootstrapNavbar navItems={navItems}/>
//                 <Child/>
//                 <Footer/>
//             </div>
//         )
//     }
// }


export const App = ({nextPage, setNavItems}) => {
    // decide the Navigation bar and Child View
    // according to nextPage state
    let Child = Landing
    let navItems = [
        {nextPage: 'LandingPage', title: 'Landing'},
        {nextPage: 'MainPage', title: 'Main'},
        {nextPage: 'ProfilePage', title: 'Profile'},
    ]
    console.log(nextPage)
    switch (nextPage) {
        case 'MainPage':
            Child = Main
            navItems = [
                {nextPage: 'LandingPage', title: 'Logout'},
                {nextPage: 'ProfilePage', title: 'Profile'},
            ]
            break
        case 'ProfilePage':
            Child = Profile
            navItems = [
                {nextPage: 'LandingPage', title: 'Logout'},
                {nextPage: 'MainPage', title: 'Main'},
            ]
            break
        default:
            Child = Landing
    }
    setNavItems(navItems)
    return (
        <div>

            <BootstrapNavbar/>
            <Child/>
            <Footer/>
        </div>
    )
}

App.propTypes = {
    nextPage: PropTypes.string.isRequired,
    setNavItems: PropTypes.func.isRequired

}

const mapStateToProps = (state) => {
    return {
        nextPage: state.nextPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onTodoClick: (id) => {
        //     dispatch(toggleTodo(id))
        // }
        setNavItems: (navItems) => {
            dispatch(setNavItems(navItems))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)