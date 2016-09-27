
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			// IMPLEMENT ME
		case 'REMOVE_TODO':
			// IMPLEMENT ME
		case 'TOGGLE_TODO':
			// IMPLEMENT ME
		default: 
			return state
	}
}

export default Reducer