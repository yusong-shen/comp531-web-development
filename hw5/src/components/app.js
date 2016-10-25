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



export const App = ({nextPage, navItems}) => {
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

            {/*<BootstrapNavbar navItems={navItems}/>*/}
            <Child/>
            <Footer/>
        </div>
    )
}

App.propTypes = {
    nextPage: PropTypes.string.isRequired
}

export default connect(
    (state) => {
        return {
            nextPage: state.nextPage
        }
    },
    (dispatch) => {
        return {
            // addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(App)