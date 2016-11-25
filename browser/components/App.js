import React, {Component} from 'react'
import ListItem from './ListItem'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: props.todoList
    }
  }
  listTodoItem(itemList) {
    return itemList.map((todo, index) =>
      <ListItem key={index} item={todo} />
    )
  }
  render() {
    return <div>Hello World
        <ul>{this.listTodoItem(this.state.itemList)}</ul>
      </div>
  }
}
