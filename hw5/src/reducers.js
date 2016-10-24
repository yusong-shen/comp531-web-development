const Reducer = (state =  {

}, action) => {
    switch(action.type) {
        // case 'ADD_TODO':
        //     return { ...state, nextId: state.nextId + 1,
        //         todoItems: [ ...state.todoItems,
        //             {id:state.nextId, text: action.text, done: false}]
        //     }
        default:
            return state
    }
}

export default Reducer