import { expect } from 'chai'
import { go, sleep, findId, findCSS, By, sendKeys } from './selenium'
import common from './common'

describe('Test Dummy Server Example Page', () => {

    const preamble = 'you are logged in as'

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    it('should log in as the test user', (done) => {
        sleep(500)
        .then(findId('message').getText()
            .then(text => {
                expect(text.indexOf(preamble)).to.equal(0)
            })
            .then(done))
    })

    it("Update the headline and verify the change", (done) => {
        // IMPLEMENT ME
        var username = common.creds.username;
        var prefix = `you are logged in as ${username} `;
        var oldHeadline = '';
        var newHeadline = 'I am new headline three!';
        sleep(500)
        // recored the old headline
        .then(findId('message').getText()
            .then(text => {
                oldHeadline = text
            }))
        // find the headline input
        // .sendKeys(new headline message)
        .then(findId('newHeadline').sendKeys(newHeadline))
        .then(findId('headline').click())
        .then(sleep(2000))
        // verify the headline is updated
        .then(findId('message').getText()
            .then(text => {
                expect(text).to.equal(prefix + '"' + newHeadline + '"')
            })
            .then(done))
        // .sendKeys(the old headline message)
        // verify the headline is updated
        // `you are logged in as ${response.username} "${response.headline}"`
        // .then(sleep(1000))
        // .then(
        //     findId('newHeadline').sendKeys(oldHeadline.substring(prefix.length)))
        // .then(findId('headline').click())
        // .then(sleep(2000))
        // // verify the headline is updated
        // .then(findId('message').getText()
        //     .then(text => {
        //         expect(text).to.equal(oldHeadline)
        //     })
        //     .then(done))
    })

    after('should log out', (done) => {
        common.logout().then(done)
    })
})
