/*
	High level presentation component for entire front-end applicaiton
	index > app > nav & view
*/
import React from 'react'
import Main from './main/main'

// a "location" state variable and then selectively display a Component based on the value
var location = 'MAIN_PAGE'

// TODO :  routing logic to determine which view to display.
export const App = () => (
    <div>
        <div>Hello React!</div>
        <div>
            <Main />
        </div>

    </div>

    // if (location == 'MAIN_PAGE') {
    //     <Main />
    // } else if (location == 'PROFILE_PAGE') {
    //     <Profile />
    // } else {
    //     <Landing />
    // }
)


// TODO : Additionally we might have compound views, including a navigation section

export default App