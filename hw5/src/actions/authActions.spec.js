import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'

describe('Login action tests', () => {
    let authActions, url, resource, loginUser, logoutUser
    beforeEach(() => {
        if (mockery.enable) {
            mockery.enable({warnOnUnregistered: false, useCleanCache:true})
            mockery.registerMock('node-fetch', fetch)
            require('node-fetch')
            global.fetch = fetch
            resource = require('../util/utils').default
            url = require('../util/utils').url
            authActions = require('./authActions')
            loginUser = require('./authActions').loginUser
            logoutUser = require('./authActions').logoutUser

        }
    })

    afterEach(() => {
        if (mockery.enable) {
            mockery.deregisterMock('node-fetch')
            mockery.disable()
        }
    })

    it('should login in a user', (done) => {

        const username = 'someuser'
        const password = 'somepassword'

        mock(`${url}/login`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            json:{username, result:'success'}
        })

        loginUser(username, password)(
            (action) => {
                switch (action.type) {
                    case 'authenticateUser':
                        expect(action.authenticated).to.eql(true)
                        break
                }
            }
        )
        done()
    })

    it('should not login in an invalid user', (done) => {

        const username = 'someuser'
        const password = 'doesn_matter'

        mock(`${url}/login`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            status: 401
        })

        loginUser(username, password)(
            (action) => {
                switch (action.type) {
                    case 'loginError':
                        expect(action).to.eql({
                            type: 'loginError',
                            errMsg: 'login fails'
                        })
                        break
                }
            }
        )
        done()
    })

    it('should login out an user', (done) => {

        mock(`${url}/logout`,{
            method: 'PUT',
            headers: {'Content-Type':'application/json'}
        })
        logoutUser()(
            (action) => {
                switch (action.type) {
                    case 'authenticateUser':
                        expect(action.authenticated).to.eql(false)
                        break
                }
            }
        )
        done()
    })
})