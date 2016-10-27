/**
 * Created by yusong on 10/20/16.
 */
import {resource} from './../util/utils'

export const addFriend = (friend) => {
    return {
        type: 'addFriend',
        friend
    }
}

export const updateFollowings = (followings) => {
    return {
        type: 'updateFollowings',
        followings
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
                    console.log('fetch all followings')
                )
            })
            .catch((err) => {
                alert(err)
            })
    }
}