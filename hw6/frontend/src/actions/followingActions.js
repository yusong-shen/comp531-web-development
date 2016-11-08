/**
 * Created by yusong on 10/20/16.
 */
import {resource} from './../util/utils'

import {fetchArticles} from './articleActions'

export const addFriend = (friend) => {
    return {
        type: 'addFriend',
        friend
    }
}

export const removeFriend = (userId) => {
    return {
        type: 'removeFriend',
        userId
    }
}

export const updateFollowings = (followings) => {
    return {
        type: 'updateFollowings',
        followings
    }
}

export const deleteFollowing = (userId) => {
    return (dispatch, getState) => {
        const endpoint = `following/${userId}`
        resource('DELETE', endpoint).then ((r) => {
            const idList = r.following
            // get the previous followings state
            const {followings} = getState().followings
            if (idList.length !== followings.length - 1) {
                dispatch({type : 'addFriendError', data : 'Unfollow failed'})
                return
            }
            dispatch(removeFriend(userId))
        }).catch((err) => {
            alert(err)
            dispatch({type : 'addFriendError', data : err})
        })
    }
}

export const putFollowing = (userId) => {
    return (dispatch, getState) => {
        const endpoint = `following/${userId}`
        resource('PUT', endpoint).then ((r) => {
            const idList = r.following
            // get the previous followings state
            const {followings} = getState().followings
            if (idList.indexOf(userId) === -1) {
                dispatch({type : 'addFriendError', data : 'User is invalid'})
                return
            } else if (followings.findIndex(x => x.username === userId) !== -1) {
                dispatch({type : 'addFriendError', data : 'User has already been your following'})
                return
            }
            dispatch(fetchFriendProfile(userId))

        }).catch((err) => {
            alert(err)
            dispatch({type : 'addFriendError', data : err})
        })
    }
}

export const fetchFriendProfile = (userId) => {
    // const fieldList = ['avatar', 'headline']
    // const endpoint = field + '/' + userId
    const friend = {username : userId}
    const p1 = resource('GET', 'avatars' + '/' + userId)
        .then((r) => {
                friend.avatar = r.avatars[0].avatar
            }
        )
        .catch((err) => {
            alert(err)
        })
    const p2 = resource('GET', 'headlines' + '/' + userId)
        .then((r) => {
                friend.headline = r.headlines[0].headline
            }
        )
        .catch((err) => {
            alert(err)
        })
    return (dispatch) => {
        Promise.all([p1, p2]).then(() => {
            dispatch(addFriend(friend))
        })
    }
}

export const fetchFollowings = (userId) => {
    const endpoint = (userId) ? `following/${userId}` : 'following'
    return (dispatch) => {
        resource('GET', endpoint, )
            .then((r) => {
                const idList = r.following
                const pList = idList.map((id) => {
                    dispatch(fetchFriendProfile(id))
                })
                Promise.all(pList).then(
                    // console.log('fetch all followings')
                )
            })
            .catch((err) => {
                alert(err)
            })
    }
}