import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {findDOMNode} from 'react-dom'
import {expect} from 'chai'

import { ToDoItem } from './todoItem'

describe('Validate ToDoItem', () => {

	it('should display a single ToDo', () => {
		// use TestUtils.renderIntoDocument
		// findDOMNode and assert 3 children of the ToDoItem element
		// assert the className is ''
		// assert the innerHTML of the todo is the text you initially set
	})

	it('should toggle completed when clicked', () => {
		const toggled = false
		// use TestUtils.renderIntoDocument
		// when the checkbox is clicked via TestUtils.Simulate.click()
		// we expect the variable toggled to be true
	})

	it('should remove an item when clicked', () => {
		const removed = false
		// use TestUtils.renderIntoDocument
		// when the remove button is clicked via TestUtils.Simulate.click()
		// we expect the variable removed to be true
	})

	it('should display a completed ToDo', () => {
		// use TestUtils.renderIntoDocument
		// the item should have done=true
		// assert that the rendered className is "completed"
	})

})
