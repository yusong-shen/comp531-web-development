// this is in common.js

exports.logout = () =>
    sleep(500)
    .then(findId('logout').click())
    .then(sleep(2000))
    .then(findId('message').getText()
        .then(text => {
            expect(text).to.equal('You have logged out')
        }))
// this is in login.spec.js

    it("Update the headline and verify the change", (done) => {
        const initialHeadline = 'Test Account'
        const newHeadline = `A new status message ${Math.random()}`

        const getMessage = (msg) => 
            `${preamble} ${common.creds.username} "${msg}"`

        const updateHeadline = (msg) => () => 
            findId('newHeadline').sendKeys(msg)
            .then(findId('headline').click())
            .then(common.logout)
            .then(common.login)
            .then(findId('newHeadline').clear())
            .then(findId('message').getText().then(text => {
                expect(text).to.equal(getMessage(msg))
            }))

        updateHeadline(newHeadline)()
        .then(updateHeadline(initialHeadline))
        .then(done)
    })