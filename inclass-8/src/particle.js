const random = (min=0, max=800) =>
    Math.random() * (max - min) + min

// default values
const particle = ({
    mass=random(5, 30),
    position=[random(), random()],
    velocity=[random(-0.1, 0.1), random(-0.1, 0.1)],
    acceleration=[0, 0]
}) => {
	// console.log(mass);
    return {acceleration, velocity, position, mass}
}

var modulus = function (x, y) {
	return ((x % y) + y) % y
}

const update = ({acceleration, velocity, position, mass}, delta, canvas) => {
	// mass = mass
	position[0] += velocity[0] * delta
	position[1] += velocity[1] * delta
	// make sure partical move inside the canvas
	position[0] = modulus(position[0], canvas.width)
	position[1] = modulus(position[1], canvas.height)
	velocity[0] += acceleration[0] * delta
	velocity[1] += acceleration[1] * delta
    return { mass, acceleration, velocity, position }
}

export default particle

export { update }
