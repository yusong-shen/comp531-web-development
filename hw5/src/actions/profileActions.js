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

export const fetchField = (field, param) => {
    return (dispatch) => {resource('GET', field + '/' + param)
        .then((r) => {
            switch(field) {
                // case "avatars":
                //     dispatch(updateAvatar(r.avatars[0].avatar))
                //     break
                case "zipcode":
                    console.log(r.zipcode)
                    dispatch(updateZipcode(r.zipcode))
                    break
                case "email" :
                    console.log(r.email)
                    dispatch(updateEmail(r.email))
                    break
                // case "dob":
                //     dispatch(updateBirthday((new Date(r.dob)).toDateString()))
                //     break
                // case "headlines":
                //     dispatch(updateHeadline(r.headlines[0].headline))
                //     dispatch(updateName(r.headlines[0].username))
                //     break
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
}
