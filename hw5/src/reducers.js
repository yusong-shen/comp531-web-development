const Reducer = (state =  {
    nextPage: 'LandingPage',
    navItems: [
        {nextPage: 'LandingPage', title: 'Landing'},
        {nextPage: 'MainPage', title: 'Main'},
        {nextPage: 'ProfilePage', title: 'Profile'},
    ]
}, action) => {
    switch(action.type) {
        case 'navigate':
            console.log('action navigate : ', action.text)
            return Object.assign({}, state, {
                nextPage: action.text
            })
        case 'setNavItems':
            console.log('action setNavItems : ', action.navItems)
            return Object.assign({}, state, {
                navItems: action.navItems
            })
        default:
            return state
    }
}

export default Reducer