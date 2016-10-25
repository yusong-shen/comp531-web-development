import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

const navigateReducer = (state =  {
    nextPage: 'LandingPage'
}, action) => {
    switch(action.type) {
        case 'navigate':
            // return Object.assign({}, state, {
            //     nextPage: action.text
            // })
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
    navigate: navigateReducer,
});



export default rootReducer