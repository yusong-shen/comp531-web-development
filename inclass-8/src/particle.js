const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

// default values
const particle = (
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
) => {
    return {acceleration, velocity, position, mass}
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
    return { mass, acceleration, velocity, position }
}

export default particle

export { update }
