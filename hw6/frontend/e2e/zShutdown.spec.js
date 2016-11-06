import { driver } from './selenium'

describe('shutdown', () => {
    it('now', done => driver.quit().then(done))
})
