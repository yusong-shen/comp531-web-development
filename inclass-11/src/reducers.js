
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
			// nextId++ and append a object to todoItems array
			return { 
                nextId: state.nextId + 1,
                todoItems: [
                    ...state.todoItems, 
                    {id: state.nextId, text: action.text, done: false}
                ]
            }
		case 'REMOVE_TODO':
			// IMPLEMENT ME
			// nextId-- and remove the given index in todoItems array
			return {
				nextId: state.nextId - 1,
				todoItems: state.todoItems.filter(({id}) => id != action.id)
			}
		case 'TOGGLE_TODO':
			// IMPLEMENT ME
			// change the given item's done to !done
			return {
				nextId: state.nextId,
				todoItems: state.todoItems.map((item, id) => {
					if (id === action.id) {
						return Object.assign({}, item, {
							done: !item.done
						})
					}
					return item
				})
			}
		default: 
			return state
	}
}

export default Reducer