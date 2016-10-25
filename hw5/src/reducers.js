const Reducer = (state =  {
    nextPage: 'LandingPage',
    navItems: [
        {link: '#/main', title: 'Main'},
        {link: '#/profile', title: 'Profile'},
    ]
}, action) => {
    switch(action.type) {
        case 'navigate':
            return Object.assign({}, state, {
                nextPage: action.text
            })
        default:
            return state
    }
}

export default Reducer