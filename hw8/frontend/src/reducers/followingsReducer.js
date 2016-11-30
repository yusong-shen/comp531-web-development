/**
 * Created by yusong on 10/25/16.
 */

// followings schema
// {
//     username, avatar, headline
// }
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
        case 'removeFriend':
            const result = state.followings.filter(x => x.username !== action.userId)
            return {
                ...state,
                followings: result
            }
        default:
            return state
    }
}

export default followingsReducer