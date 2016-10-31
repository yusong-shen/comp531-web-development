/**
 * Created by yusong on 10/27/16.
 */

import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'
import { expect } from 'chai'

describe('Validate resource actions', () => {

    let resource, url
    beforeEach(() => {
        if (mockery.enable) {
            mockery.enable({warnOnUnregistered: false, useCleanCache:true})
            mockery.registerMock('node-fetch', fetch)
            require('node-fetch')
            resource = require('./utils').resource
            url = require('./utils').url

        }
    })

    afterEach(() => {
        if (mockery.enable) {
            mockery.deregisterMock('node-fetch')
            mockery.disable()
        }
    })


    it('resource should be a resource (i.e., mock a request)', (done) => {
        mock(`${url}/headlines`, {
            method: 'GET',
            headers: {'Content-Type':'application/json'},
            json:{
                username: 'foobar',
                headline: 'some headline'
            }
        })

        resource('GET', 'headlines')
            .then((res) => {
                expect(res).to.eql({
                    username: 'foobar',
                    headline: 'some headline'
                })
            })
            .then(done)
            .catch(done)
    })

    it('resource should give me the http error', (done) => {
        resource('GET', 'somethingWrong').then((res) => {
        })
        .then(done)
        .catch((err) => {
            expect(err).to.exist
            done()
        })
    })

    it('resource should be POSTable', (done) => {
        const user = 'test'
        mock(`${url}/login`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            json: {
                username: user,
                result:"success"
            }
        })

        resource('POST', 'login', { user, password: 'somepwd' })
            .then((res) => {
                expect(res).to.eql({ username: 'test', result:"success"})
            })
            .then(done)
            .catch((err) => {
                expect(err).to.not.exist
                done()
            })
    })

})