import React from 'react'
import ReactDOM from 'react-dom'

class Todo extends React.Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(){
    const{todo,removeTodo} = this.props
    removeTodo(todo)
  }
  render(){
    const{todo} = this.props
    return(
      <li>{todo.id}:{todo.text} <button onClick={this.handleDelete}>X</button></li>
    )
  }
}
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todos : [],
      value: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.id = 0
  }

  handleClick(){
    this.setState({
      todos : [...this.state.todos, {
        text:this.state.value,
        id:this.id++
      }],
      value : ''
    })
  }

  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }

  removeTodo(todo){
    this.setState({
      todos:this.state.todos.filter(item => item.id !== todo.id)
    })
  }
  render(){
    return(
      <div>
        TODO: <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add todo</button>
        <ul>
          {this.state.todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo = {this.removeTodo} />)}
        </ul>
      </div>
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)