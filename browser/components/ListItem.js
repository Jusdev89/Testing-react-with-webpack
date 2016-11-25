import React, {Component} from 'react'

export default class ListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: props.item
    }
    this.setItem = this.setItem.bind(this)
  }
  setItem() {
    this.setState({
      item: "New Text"
    })
  }
  render() {
    return <li>
      <button onClick={this.setItem}>
        <div id="set-value">
          {this.state.item}
        </div>
      </button>
    </li>
  }
}
