import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'


let authActions, url, resource
beforeEach(() => {
    if (mockery.enable) {
        mockery.enable({warnOnUnregistered: false, useCleanCache:true})
        mockery.registerMock('node-fetch', fetch)
        require('node-fetch')
        global.fetch = fetch
        resource = require('../util/utils').default
        url = require('../util/utils').url
        authActions = require('./authActions')

    }
})

afterEach(() => {
    if (mockery.enable) {
        mockery.deregisterMock('node-fetch')
        mockery.disable()
    }
})

it('should be able to login', (done) => {

    const username = 'someuser'
    const password = 'somepassword'

    // the result from the mocked AJAX call
    mock(`${url}/login`,{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        json:{username, result:'success'}
    })


})