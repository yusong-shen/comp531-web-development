import { expect } from 'chai'
import { go, sleep, findId, findCSS, By, sendKeys } from './selenium'
import common from './common'

describe('Ricebook Front-End End-to-End testing', () => {


    // Register a new user
    before('should Register a new user', (done) => {
        go()
        .then(sleep(1000))
        .then(findId('rg_username').clear())
        .then(findId('rg_email').clear())
        .then(findId('rg_zipcode').clear())
        .then(findId('rg_password').clear())
        .then(findId('rg_passwordConfirmation').clear())
        .then(findId('rg_username').sendKeys('testUser'))
        .then(findId('rg_email').sendKeys('test@ricebook.com'))
        .then(findId('rg_zipcode').sendKeys('77005'))
        .then(findId('rg_dob').sendKeys('01/01/1990'))
        .then(findId('rg_password').sendKeys('random'))
        .then(findId('rg_passwordConfirmation').sendKeys('random'))
        .then(findId('register_btn').click())
        .then(sleep(1000))
        .then(findId('registerMsg').getText()
            .then(text => {
                expect(text).to.equal("register as testUser")
            }))
        .then(done)
    })

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    // TODO
    it('should log in as the test user', (done) => {
        sleep(500)
        .then(findId('username').getText()
            .then(text => {
                expect(text).to.equal("Username : ys43test")
            }))
        .then(done)
    })

    // TODO
    it('should Create a new article and validate the article appears in the feed', (done) => {
        done()


    })

    // TODO
    it('should Edit an article and validate the article text has updated', (done) => {
        done()

    })

    // TODO
    it("should update the headline and verify the change", (done) => {
        // // IMPLEMENT ME
        // var username = common.creds.username;
        // var prefix = `you are logged in as ${username} `
        // var oldHeadline = 'I am old headline!'
        // var newHeadline = 'I am new headline three!'
        // sleep(500)
        // // find the headline input
        // .then(findId('newHeadline').sendKeys(newHeadline))
        // .then(findId('headline').click())
        // .then(sleep(2000))
        // // verify the headline is updated
        // .then(findId('message').getText()
        //     .then(text => {
        //         expect(text).to.equal(prefix + '"' + newHeadline + '"')
        //     }))
        // // .sendKeys(the old headline message)
        // // verify the headline is updated
        // .then(sleep(1000))
        // .then(findId('newHeadline').clear())
        // .then(findId('newHeadline').sendKeys(oldHeadline))
        // .then(findId('headline').click())
        // .then(sleep(2000))
        // // verify the headline is updated
        // .then(findId('message').getText()
        //     .then(text => {
        //         expect(text).to.equal(prefix + '"' + oldHeadline + '"')
        //     })
        //     .then(done))
        done()
    })

    // TODO
    it('should Count the number of followed users', (done) => {
        done()

    })

    // TODO
    it('should Add the user "Follower" to the list of followed users and verify the count increases by one', (done) => {
        done()

    })

    // TODO
    it('Remove the user "Follower" from the list of followed users and verify the count decreases by one', (done) => {
        done()

    })

    // TODO
    it('Search for "Only One Article Like This" and verify only one article shows, and verify the author', (done) => {
        done()

    })

    // TODO
    it('Navigate to the profile view, Update the user\'s email and verify', (done) => {
        done()
    })

    // TODO
    it('Navigate to the profile view, Update the user\'s zipcode and verify', (done) => {
        done()

    })

    // TODO
    it('Navigate to the profile view, Update the user\'s password, verify a "will not change" message is returned', (done) => {
        done()

    })

    after('should log out', (done) => {
        common.logout().then(done)
    })
})
