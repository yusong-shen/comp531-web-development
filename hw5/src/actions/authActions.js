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
            .then((r) => {
                const usr = r.username
                dispatch(authenticateUser(true))
                dispatch(ProfileActions.updateUsername(usr))
                const fieldList = ['email', 'zipcode', 'avatars', 'headlines']
                const pList = fieldList.map((field) => dispatch(ProfileActions.fetchField(field)))
                Promise.all(pList).then(() => {
                    dispatch(Actions.navigate('MainPage'))
                })
                console.log('log in successfully! ', r)
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
