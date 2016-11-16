/**
 * Created by yusong on 10/25/16.
 */

const initState = {
    authenticated: false
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'authenticateUser':
            return {
                ...state,
                authenticated: action.authenticated
            }
        default:
            return state
    }
}

export default authReducer
