/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'

export const updateAvatar = (avatar) => {
    return {
        type: 'updateAvatar',
        avatar
    }
}

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

// date of birth in milli second
export const updateDob = (dob) => {
    return {
        type: 'updateDob',
        dob
    }
}

export const updatePreview = (previewUrl) => {
    return (dispatch) => {
        dispatch({type : 'updatePreview', previewUrl})
    }
}

export const putHeadline = (headline) => {
    return (dispatch) => {
        resource('PUT', 'headline', {
            headline
        }).then ((r) => {
            dispatch(updateHeadline(r.headline))
        }).catch((err) => {
            // alert(err)
            dispatch({ type : 'headlineError' , data : err})
        })
    }
}

export const putEmail = (email) => {
    return (dispatch) => {
        resource('PUT', 'email', {
            email
        }).then ((r) => {
            dispatch(updateEmail(r.email))
        }).catch((err) => {
            alert(err)
        })
    }
}

export const putZipcode = (zipcode) => {
    return (dispatch) => {
        resource('PUT', 'zipcode', {
            zipcode
        }).then ((r) => {
            dispatch(updateZipcode(r.zipcode))
        }).catch((err) => {
            alert(err)
        })
    }
}

export const putPassword = (password) => {
    return (dispatch) => {
        resource('PUT', 'password', {
            password
        }).then ((r) => {
            dispatch({type : 'passwordMsg', data : r.message})
        }).catch((err) => {
            alert(err)
        })
    }
}

export const putAvatar = (avatar) => {
    return (dispatch) => {
        // payload is form data
        resource('PUT', 'avatar', avatar, true)
            .then ((r) => {
                dispatch(updateAvatar(r.avatar))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const fetchField = (field, param) => {
    const endpoint = (param) ? field + '/' + param : field
    return (dispatch) => {resource('GET', endpoint)
        .then((r) => {
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
                case "headlines":
                    dispatch(updateHeadline(r.headlines[0].headline))
                    dispatch(updateUsername(r.headlines[0].username))
                    break
                case "dob":
                    dispatch(updateDob(r.dob))
                    break
                case "authType":
                    dispatch({type : 'updateAuthType', authType : JSON.stringify(r)})
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const linkAccount = () => {
    return (dispatch) => {
        resource('GET', 'linkAccount')
            .then((r) => {
                console.log(r)
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const unlinkAccount = () => {
    return (dispatch) => {
        resource('GET', 'unlinkAccount')
            .then((r) => {
                console.log(r)
            })
            .catch((err) => {
                alert(err)
            })
    }
}