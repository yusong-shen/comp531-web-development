import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'

describe('Validate Profile actions', () => {
    let url, resource, fetchField, putHeadline
    beforeEach(() => {
        if (mockery.enable) {
            mockery.enable({warnOnUnregistered: false, useCleanCache:true})
            mockery.registerMock('node-fetch', fetch)
            require('node-fetch')
            global.fetch = fetch
            resource = require('../util/utils').default
            url = require('../util/utils').url
            fetchField = require('./profileActions').fetchField
            putHeadline = require('./profileActions').putHeadline

        }
    })

    afterEach(() => {
        if (mockery.enable) {
            mockery.deregisterMock('node-fetch')
            mockery.disable()
        }
    })

    it('should fetch the user\'s proile information', (done) => {
        const field = 'avatar'
        const param = 'ysys'
        const endpoint = `avatars/${param}`

        mock(`${url}/${endpoint}`,{
            headers: {'Content-Type':'application/json'},
            json: { avatars: [
                { username:param, avatar:'pictureURL' }
            ]}
        })

        fetchField(field, param)(
            (action) => {
                expect(action.type).to.eql('updateAvatar')
                expect(action.avatar).to.eql('pictureURL')
            }
        )
        done()
    })

    it('should update headline', (done) => {
        const newHeadline = 'be happy'
        mock(`${url}/headline`,{
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            json: {
                username: 'doesnmatter',
                headline: newHeadline
            }
        })


        putHeadline(newHeadline) (
            (action) => {
                expect(action.type).to.eql('updateHeadline')
                expect(action.headline).to.eql(newHeadline)
            }
        )
        done()
    })


})