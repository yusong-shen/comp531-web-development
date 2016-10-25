const Reducer = (state =  {
    nextPage: 'LandingPage'
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