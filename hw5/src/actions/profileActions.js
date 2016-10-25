/**
 * Created by yusong on 10/20/16.
 */


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