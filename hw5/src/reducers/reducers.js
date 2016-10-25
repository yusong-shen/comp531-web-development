import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

const navigateReducer = (state =  {
    nextPage: 'LandingPage'
}, action) => {
    switch(action.type) {
        case 'navigate':
            return {
                ...state,
                nextPage: action.text
            }
        default:
            return state
    }
}

const profileReducer = (state = {
    username: 'foobar',
    email: 'a@b.com',
    zipcode: '77005',
    headline: 'foobar old headline'
}, action) => {
    switch(action.type) {
        case 'updateUsername':
            if (action.username) {
                return {
                    ...state,
                    username: action.username
                }
            } else {
                return state
            }
        case 'updateEmail':
            if (action.email) {
                return {
                    ...state,
                    email: action.email
                }
            } else {
                return state
            }
        case 'updateZipcode':
            if (action.zipcode){
                return {
                    ...state,
                    zipcode: action.zipcode
                }
            } else {
                return state
            }
        case 'updateHeadline':
            if (action.headline) {
                return {
                    ...state,
                    headline: action.headline
                }
            } else {
                return state
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    form: FormReducer,
    profile: profileReducer,
    navigate: navigateReducer,
});



export default rootReducer