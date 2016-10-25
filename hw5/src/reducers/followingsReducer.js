/**
 * Created by yusong on 10/25/16.
 */

const initState = {
    followings: [
        {
            username: 'ys43',
            headline: 'headline 1'
        },
        {
            username: 'ys43test',
            headline: 'headline 2'
        },
    ]
}

const followingsReducer = (state = initState, action) => {
    switch(action.type) {
        // case 'navigate':
        //     return {
        //         ...state,
        //         nextPage: action.text
        //     }
        default:
            return state
    }
}

export default followingsReducer