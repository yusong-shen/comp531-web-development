import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { findDOMNode } from 'react-dom'
import { shallow } from 'enzyme';
import { expect } from 'chai'

import { ToDos, AddTodo } from './todos'

describe('Validate ToDos', () => {

	it('should display ToDos', () => {
		const todos = [
			{  id: 1, text: 'hi', done: false },
			{  id: 2, text: 'hello', done: true }
		]
		const node = shallow(<ToDos todoItems={todos} addTodo={_ => _}/>)
		expect(node.children().length).to.equal(10)
		expect(node.find('ul').children().length).to.equal(2)
	})

	it('should add a new ToDo', () => {
		let added = false
		const node = TestUtils.renderIntoDocument(<div>
				<AddTodo addTodo={() => { added=true }}/>
			</div>)

		const elements = findDOMNode(node).children[0]
		expect(elements.children.length).to.equal(2)

		const input = elements.children[0]
		expect(input.type).to.equal('text')
		expect(input.value).to.equal('')
		input.value = 'foobar'
		TestUtils.Simulate.change(input)

		expect(added).to.be.false
	    TestUtils.Simulate.click(elements.children[1])
		expect(added).to.be.true

		added = false
		input.value = ''
		TestUtils.Simulate.change(input)

		expect(added).to.be.false
	    TestUtils.Simulate.click(elements.children[1])
		expect(added).to.be.false
	})

})
