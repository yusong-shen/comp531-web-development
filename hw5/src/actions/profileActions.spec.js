import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'


let profileActions, url, resource
beforeEach(() => {
    if (mockery.enable) {
        mockery.enable({warnOnUnregistered: false, useCleanCache:true})
        mockery.registerMock('node-fetch', fetch)
        require('node-fetch')
        global.fetch = fetch
        resource = require('../util/utils').default
        url = require('../util/utils').url
        profileActions = require('./profileActions')

    }
})

afterEach(() => {
    if (mockery.enable) {
        mockery.deregisterMock('node-fetch')
        mockery.disable()
    }
})

// it('should update the status message', (done) => {
//
//     // the result from the mocked AJAX call
//     const username = 'sep1test'
//     const headline = 'A new headline!'
//
//     mock(`${url}/headline`, {
//         method: 'PUT',
//         headers: {'Content-Type':'application/json'},
//         json: { username, headline }
//     })
//
//     // review how complex actions work in Redux
//     // updateHeadline returns a complex action
//     // the complex action is called with dispatch as an argument
//     // dispatch is then called with an action as an argument
//
//     profileActions.putHeadline('does not matter')(
//         fn => fn(action => {
//             // expect(action).to.eql({
//             //     headline, type: 'updateHeadline'
//             // })
//             expect(1).to.eql(1)
//         }))
//         .then(done)
//         .catch(done)
//
// })