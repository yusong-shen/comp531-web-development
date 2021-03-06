import { expect } from 'chai'
import particle from './particle'
import { update } from './particle'

describe('Particle Functionality', () => {

    var width = 800
    var height = 800
    var canvas = { width, height}

    it('should have default values', () => {
        const p = particle({})
        expect(p).to.be.ok
        expect(p.missingAttribute).to.not.be.ok
        // check position, velocity, acceleration, mass
        expect(p.position).to.be.ok
        expect(p.velocity).to.be.ok
        expect(p.acceleration).to.be.ok
        expect(p.mass).to.be.ok
    })

    it('should update the position by the velocity', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 1.0, canvas)
        // use .to.eql() instead of .to.equal() to deep compare arrays
        expect(position).to.eql([1.5, 0.5])
    })

    it('should update the position by the velocity and time delta', () => {
        const p = particle({ position: [1, 1], velocity: [0.5, -0.5] })
        const { position } = update(p, 2.0, canvas) // dt is different here
        expect(position).to.eql([2.0, 0.0])     
    })

    it('should update the velocity by the acceleration', () => {
        // similar to the previous check
        const p = particle({ velocity: [1, 1], acceleration: [0.5, -0.5] })
        const { velocity } = update(p, 1.0, canvas)
        expect(velocity).to.eql([1.5, 0.5])      
    })

    it('particles should wrap around the world', () => {
        // create a particle with position outside
        // of the canvas area.  update() should
        // bring the particle back inside
        // check all four sides
        // expect(1).to.equal(1)
        // update(p, 3.521, { width:111, height: 222 })
        const p = particle({ position: [-20, 865], velocity: [0.5, -0.5] })
        const { position } = update(p, 1, canvas)
        expect(position[0] <= width).to.be.true
        expect(position[0] >= 0).to.be.true
        expect(position[1] <= height).to.be.true
        expect(position[1] >= 0).to.be.true

    })

})
