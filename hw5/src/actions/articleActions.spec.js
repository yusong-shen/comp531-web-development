import { expect } from 'chai'
import mockery from 'mockery'
import fetch, { mock } from 'mock-fetch'

describe('Validate Article actions', () => {
    let url, resource, fetchArticles, setKeyword
    beforeEach(() => {
        if (mockery.enable) {
            mockery.enable({warnOnUnregistered: false, useCleanCache:true})
            mockery.registerMock('node-fetch', fetch)
            require('node-fetch')
            global.fetch = fetch
            resource = require('../util/utils').default
            url = require('../util/utils').url
            fetchArticles = require('./articleActions').fetchArticles
            setKeyword = require('./articleActions').setKeyword

        }
    })

    afterEach(() => {
        if (mockery.enable) {
            mockery.deregisterMock('node-fetch')
            mockery.disable()
        }
    })

    it('should fetch articles', (done) => {

        const username = 'someuser'

        mock(`${url}/articles`,{
            headers: {'Content-Type':'application/json'},
            json: { articles: [
                { id:1, author: 'Scott', text:'A post 1' },
                { id:2, author: 'Scott1', text:'A post 2' },
                { id:3, author: 'Scott2', text:'A post 3' },
                { id:4, author: 'ys004', text:'A post 4' },
                { id:5, author: 'ys005', text:'A post 5' },
            ]}
        })

        fetchArticles(username)(
            (action) => {
                expect(action.type).to.eql('updateArticles')
                expect(action.arcticles.length).to.eql(5)
            }
        )
        done()
    })

    it('should update the search key', (done) => {
        done()
    })


})