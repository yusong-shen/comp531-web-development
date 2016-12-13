/**
 * Created by yusong on 10/25/16.
 */
const profileReducer = (state = {
    avatar: '',
    username: '',
    email: '',
    zipcode: '',
    headline: '',
    authType: ''
}, action) => {
    switch(action.type) {
        case 'updateUsername':
            if (action.username) {
                return {
                    ...state,
                    username: action.username
                }
            } else {
                return state
            }
        case 'updateAvatar':
            if (action.avatar) {
                return {
                    ...state,
                    avatar: action.avatar
                }
            } else {
                return state
            }
        case 'updateEmail':
            if (action.email) {
                return {
                    ...state,
                    email: action.email
                }
            } else {
                return state
            }
        case 'updateZipcode':
            if (action.zipcode){
                return {
                    ...state,
                    zipcode: action.zipcode
                }
            } else {
                return state
            }
        case 'updateHeadline':
            if (action.headline) {
                return {
                    ...state,
                    headline: action.headline
                }
            } else {
                return state
            }
        case 'updateDob':
            if (action.dob) {
                return {
                    ...state,
                    dob: action.dob
                }
            } else {
                return state
            }
        case 'updatePreview':
            return {
                ...state,
                previewUrl : action.previewUrl
            }
        case 'updateAuthType':
            if (action.authType) {
                return {
                    ...state,
                    authType: action.authType
                }
            } else {
                return state
            }
        default:
            return state
    }
}

export default profileReducer