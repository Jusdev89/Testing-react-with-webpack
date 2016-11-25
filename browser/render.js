import ReactDom from 'react-dom'
import App from './components/App'
import React from 'react'
import {todoList} from '../data/list'

ReactDom.render(
  <App todoList={todoList}/>,
  document.getElementById('root')
)
