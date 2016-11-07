/**
 * Created by yusong on 10/25/16.
 */

const initState = {
    followings: []
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
        case 'updateFollowings':
            return {
                ...state,
                followings: action.followings
            }
        case 'clearFollowings':
            return {
                ...state,
                followings: []
            }
        default:
            return state
    }
}

export default followingsReducer