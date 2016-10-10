import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'
import {expect} from 'chai'

import { ToDoItem } from './todoItem'

describe('Validate ToDoItem', () => {

	it('should display a single ToDo', () => {
		const node = TestUtils.renderIntoDocument(<div>
			<ToDoItem 
				id={141} text="hello world" done={false}
				toggle={e => { }} remove={e => { }}
			/></div>)

		const elements = findDOMNode(node).children[0]
		expect(elements.children.length).to.equal(3)
		
		expect(elements.children[1].className).to.equal('')
		expect(elements.children[1].innerHTML).to.equal('hello world')
	})

	it('should toggle completed when clicked', () => {
		let toggled = false
		const node = TestUtils.renderIntoDocument(<div>
			<ToDoItem 
				id={141} text="hello world" done={false}
				toggle={e => { toggled = true }}
				remove={e => { }}
			/></div>)

		const elements = findDOMNode(node).children[0]

		expect(toggled).to.be.false
	    TestUtils.Simulate.click(elements.children[0])
		expect(toggled).to.be.true
	})

	it('should remove an item when clicked', () => {
		let removed = false
		const node = TestUtils.renderIntoDocument(<div>
			<ToDoItem 
				id={141} text="hello world" done={false}
				toggle={e => { }}
				remove={e => { removed = true }}
			/></div>)

		const elements = findDOMNode(node).children[0]

		expect(removed).to.be.false
	    TestUtils.Simulate.click(elements.children[2])
		expect(removed).to.be.true
	})

	it('should display a completed ToDo', () => {
		const node = TestUtils.renderIntoDocument(<div>
			<ToDoItem 
				id={141} text="hello world" done={true}
				toggle={e => { }} remove={e => { }}
			/></div>)

		const elements = findDOMNode(node).children[0]
		expect(elements.children.length).to.equal(3)
		
		expect(elements.children[1].className).to.equal('completed')
	})

})