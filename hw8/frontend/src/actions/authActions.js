/**
 * Created by yusong on 10/20/16.
 */

import {resource} from './../util/utils'
import * as Actions from  './action'
import * as ProfileActions from  './profileActions'
import * as ArticleActions from './articleActions'
import * as FollowingActions from './followingActions'

export const authenticateUser = (authenticated) => {
    return {
        type: 'authenticateUser',
        authenticated
    }
}

const fetchAll = (dispatch) => {
    return (r) => {
        const usr = r.username
        dispatch(ProfileActions.updateUsername(usr))
        const fieldList = ['email', 'zipcode', 'avatars', 'headlines', 'dob', 'authType']
        const pList = fieldList.map((field) => dispatch(ProfileActions.fetchField(field)))
        const p1 = dispatch(ArticleActions.fetchArticles())
        const p2 = dispatch(FollowingActions.fetchFollowings(usr))
        pList.push(p1)
        pList.push(p2)
        Promise.all(pList).then(() => {
            dispatch(Actions.navigate('MainPage'))
        })
    }
}

export const initVisit = () => {
    return (dispatch) => {
        resource('GET', 'headline')
            .then(r => fetchAll(dispatch)(r))
            .catch(err => {
                console.log('not yet login')
                console.log(err)
            })
    }
}

export const loginUser = (username, password) => {
    return (dispatch) => {
        resource('POST', 'login', { username, password })
            .then((r) => fetchAll(dispatch)(r))
            .catch((err) => {
                dispatch({type : "loginError", data : err + ' Username or Password doesn\' match.'})
        })
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        resource('PUT', 'logout')
            .then(() => {
                // alert('You have logged out')
                dispatch({type : "logoutMsg", data : 'You have logged out'})
                dispatch(authenticateUser(false))
                // clean the state content
                dispatch(ArticleActions.clearArticles())
                dispatch(Actions.navigate('LandingPage'))
            })
            .catch((err) => {
                alert(err)
            })
    }
}

export const register = (username, password, email, dob, zipcode) => {
    return (dispatch) => {
        resource('POST', 'register', { username, password, email, dob, zipcode })
            .then((r) => {
                const usr = r.username
                // alert(`register as ${usr}`)
                dispatch({type : "registerMsg", data : `register as ${usr}`})
            })
            .catch((err) => {
                dispatch({type : "registerError", data : err + 'Unable to register'})
            })
    }
}

export default loginUser
