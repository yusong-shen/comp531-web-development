/*
	High level presentation component for entire front-end applicaiton
	index > app > nav & view
*/
import React from 'react'
import Main from './main/main'
import Profile from './profile/profile'
import Landing from './auth/landing'

// routing logic to determine which view to display.
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // a route state variable and then selectively
            // display a Component based on the value
            route : window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
            // console.log(this.state.route)
        })
    }

    // TODO : Additionally we might have compound views, including a navigation section
    render() {
        // As the hash portion of the URL changes, <App> will render
        // a different <Child> by branching on this.state.route
        let Child
        switch (this.state.route) {
            case '/main': Child = Main; break;
            case '/profile': Child = Profile; break;
            default: Child = Landing;
        }
        return (
            <div>
                <h1>Ricebook</h1>
                <ul>
                    <li><a href="#/">Landing</a></li>
                    <li><a href="#/main">Main</a></li>
                    <li><a href="#/profile">Profile</a></li>
                </ul>
                <Child/>
            </div>
        )
    }
}


export default App