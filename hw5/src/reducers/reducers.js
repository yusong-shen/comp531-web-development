import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'
import profileReducer from './profileReducer'
import articlesReducer from './articlesReducer'
import followingsReducer from './followingsReducer'

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

const rootReducer = combineReducers({
    form: FormReducer,
    profile: profileReducer,
    navigate: navigateReducer,
    articles: articlesReducer,
    followings: followingsReducer
});



export default rootReducer