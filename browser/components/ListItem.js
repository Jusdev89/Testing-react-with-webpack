import React, {Component} from 'react'

export default class ListItem extends Component {
  render() {
    return <li>
      <button>{this.props.item}</button>
    </li>
  }
}
