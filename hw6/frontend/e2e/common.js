import { expect } from 'chai'
import { findId, sleep } from './selenium'

// TODO add your test user credentials here!
exports.creds = {
    username: 'ys43test',
    password: 'judge-sentence-return'
}

exports.login = () => 
    sleep(2500)
    .then(findId('login_username').clear())
    .then(findId('login_password').clear())
    .then(findId('login_username').sendKeys(exports.creds.username))
    .then(findId('login_password').sendKeys(exports.creds.password))
    .then(findId('login').click())
    .then(sleep(2000))

exports.logout = () =>
    sleep(500)
    .then(findId('logout').click())
    // IMPLEMENT ME
    // validate the message says: 'You have logged out'
    .then(sleep(1000))


