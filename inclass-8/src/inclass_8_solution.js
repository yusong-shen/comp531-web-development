// particle.js
const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

const wrap = ([x, y], canvas) => [
    x > canvas.width ? x - canvas.width : x < 0 ? x + canvas.width : x,
    y > canvas.height ? y - canvas.height : y < 0 ? y + canvas.height : y]

// default values
const particle = ({
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
} = {}) => {
    return {acceleration, velocity, position, mass}
}

const add = ([v1x, v1y], [v2x, v2y]) => [v1x+v2x, v1y+v2y]

const scale = ([vx, vy], m) => [vx*m, vy*m]

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
    return { mass, acceleration,
        velocity: add(velocity, scale(acceleration, delta)),
        position: wrap(add(position, scale(velocity, delta)), canvas) }
}

export default particle

export { update }
// particle.spec.js
// Inclass Particle Solution
// @author Scott Pollack
import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    const canvas = { width: 10, height: 5 }

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        expect(p.mass).to.be.a('number')
        const attr = [p.position, p.velocity, p.acceleration]
        attr.forEach(tuple => {
            expect(tuple).to.have.lengthOf(2)
            tuple.forEach(el => expect(el).to.be.a('number'))
        })
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 1.0, canvas)
        expect(position).to.eql([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0, canvas) // dt is different here
        expect(position).to.eql([2.0, 0.0])
    })

    it('should update the velocity by the acceleration', () => {
        const p = particle({ position: [1, 1], 
            velocity: [0.5, -0.5], acceleration: [ 1, 0.5 ] })
        const { velocity } = update(p, 1.0, canvas)
        expect(velocity).to.eql([1.5, 0.0])
    })

    it('particles should wrap around the world', () => {
        const p = particle({ position: [5, 5], velocity: [1, 0.5] })
        
        const p_left = update(p, -6, canvas)
        expect(p_left.position[0]).to.eql(5 - 6 + canvas.width)
        const p_right = update(p, 6, canvas)
        expect(p_right.position[0]).to.eql(5 + 6 - canvas.width)
        const p_top = update(p, 12, canvas)
        expect(p_top.position[1]).to.eql(5 + 12 * 0.5 - canvas.height)
        const p_bottom = update(p, -12, canvas)
        expect(p_bottom.position[1]).to.eql(5 - 12 * 0.5 + canvas.height)
    })

})