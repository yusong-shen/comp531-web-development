import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import profileReducer from './profileReducer'
import articlesReducer from './articlesReducer'
import followingsReducer from './followingsReducer'
import  authReducer from './authReducer'

export const errorReducer = (state = {}, action) => {
    switch (action.type) {
        case 'loginError':
            return { loginError : action.data }
        case 'registerMsg':
            return { registerMsg : action.data }
        case 'registerError':
            return { registerError : action.data }
        case 'logoutMsg':
            return { logoutMsg : action.data }
        case 'errClear':
            return {}
        case 'passwordMsg':
            return { passwordMsg : action.data }
        case 'headlineError':
            return { headlineError : action.data }
        case 'addFriendError':
            return { addFriendError : action.data }
        default:
            return state
    }
}

export const navigateReducer = (state =  {
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

const rootReducer = combineReducers({
    form: FormReducer,
    profile: profileReducer,
    navigate: navigateReducer,
    articles: articlesReducer,
    followings: followingsReducer,
    auth: authReducer,
    error: errorReducer,
});



export default rootReducer