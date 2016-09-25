;(function() {

'use strict'

class ToDoItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            done: false
        }
    }

    render() { return (
        <li>
            <i className="check glyphicon glyphicon-check" 
                onClick={() => this.setState({ done: !this.state.done }) }/>
            <span className={ this.state.done ? "completed" : ""}>{ this.props.text }</span>
            <i className="destroy glyphicon glyphicon-remove" 
                onClick={() => this.props.remove()}/>
        </li>
    )}
}

class ToDos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nextId: 2,
            todoItems: [
                {id:0, text:"This is an item"},
                {id:1, text:"Another item" }
            ]
        }
    }

    addTodo() {
        const text = this.newTODO.value
        if (text && text.length) {
            this.setState({ 
                nextId: this.state.nextId + 1,
                todoItems: [
                    ...this.state.todoItems, 
                    {id:this.state.nextId, text}
                ]
            })
        }
        this.newTODO.value = ''
    }

    removeTodo(removeId) {
        this.setState({ 
            todoItems: this.state.todoItems.filter(({text, id}) => id != removeId)
        })
    }

    render() { return (
        <div>
            <input type="text" placeholder="To Do"
                ref={ (node) => this.newTODO = node } />
            <button onClick={() => this.addTodo()}>Add Item</button>
            <span className="submit">
                <a href="https://webdev-rice.herokuapp.com" target="_blank">
                Submit your exercise</a>
            </span>
            <ul className="todo">
                {this.state.todoItems.map(({text, id}) => (
                    <ToDoItem key={id} text={text} remove={() => this.removeTodo(id)} />
                ))}
            </ul>
        </div>
    )}
}

ReactDOM.render(<ToDos/>, document.getElementById('app'));

})()