/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'


export const updateUsername = (username) => {
    return {
        type: 'updateUsername',
        username
    }
}

export const updateEmail = (email) => {
    return {
        type: 'updateEmail',
        email
    }
}

export const updateZipcode = (zipcode) => {
    return {
        type: 'updateZipcode',
        zipcode
    }
}

export const updateHeadline = (headline) => {
    return {
        type: 'updateHeadline',
        headline
    }
}

export const fetchField = (field) => {
    return (dispatch) => {resource('GET', field).then((r) => {
        switch(field) {
            case "avatars":
                dispatch(updateAvatar(r.avatars[0].avatar))
                break
            case "zipcode":
                dispatch(updateZipcode(r.zipcode))
                break
            case "email" :
                dispatch(updateEmail(r.email))
                break
            case "dob":
                dispatch(updateBirthday((new Date(r.dob)).toDateString()))
                break
            case "headlines":
                dispatch(updateHeadline(r.headlines[0].headline))
                dispatch(updateName(r.headlines[0].username))
                break
        }
    })
    }
}
// export const fetchEmail = (userId) => {
//     return (dispatch) => {
//         resource('GET', `email/${userId}`)
//             .then((response) => {
//                 const email = response.emailAddress
//                 dispatch(updateEmail(email))
//             })
//             .catch((err) => {
//                 alert(err)
//             })
//     }
// }
//
// export const fetchZipcode = (userId) => {
//     return (dispatch) => {
//         resource('GET', `zipcode/${userId}`)
//             .then((response) => {
//                 const zipcode = response.zipcode
//                 dispatch(updateZipcode(zipcode))
//             })
//             .catch((err) => {
//                 alert(err)
//             })
//     }
// }