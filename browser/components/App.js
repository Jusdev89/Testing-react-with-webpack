import React, {Component} from 'react'
import ListItem from './ListItem'

export default class App extends Component {
  listTodoItem() {
    return this.props.todoList.map((todo, index) =>
      <ListItem key={index} item={todo} />
    )
  }
  render() {
    return <div>Hello World
        <ul>{this.listTodoItem()}</ul>
      </div>
    }
  }
