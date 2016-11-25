import ReactDom from 'react-dom'
import App from './components/App'
import React from 'react'
import todoList from '../data/list'

ReactDom.render(
  <App itemList={todoList}/>,
  document.getElementById('root')
)
