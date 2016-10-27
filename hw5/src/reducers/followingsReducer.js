/**
 * Created by yusong on 10/25/16.
 */

const initState = {
    followings: [
        {
            avatar: '',
            username: 'ys43',
            headline: 'headline 1'
        },
        {
            avatar: '',
            username: 'ys43test',
            headline: 'headline 2'
        },
    ]
}

const followingsReducer = (state = initState, action) => {
    switch(action.type) {
        case 'addFriend':
            return {
                ...state,
                followings: [
                    ...state.followings,
                    action.friend
                ]
            }
        default:
            return state
    }
}

export default followingsReducer