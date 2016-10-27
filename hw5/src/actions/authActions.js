/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'
import * as Actions from  './action'
import * as ProfileActions from  './profileActions'

export const authenticateUser = (authenticated) => {
    return {
        type: 'authenticateUser',
        authenticated
    }
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        resource('POST', 'login', { username, password })
            .then((response) => {
                const usr = response.username
                dispatch(authenticateUser(true))
                dispatch(ProfileActions.updateUsername(usr))
                const p1 = dispatch(ProfileActions.fetchField(`email/${usr}`))
                const p2 = dispatch(ProfileActions.fetchField(`zipcode/${usr}`))
                Promise.all([p1, p2]).then(() => {
                    dispatch(Actions.navigate('MainPage'))
                })
                console.log('log in successfully! ', response)
            })
            .catch((err) => {
            alert(err)
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        resource('PUT', 'logout')
            .then((response) => {
                alert('You have logged out')
                dispatch(authenticateUser(false))
                dispatch(Actions.navigate('LandingPage'))
                // TODO : clean the state content
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export default loginUser
