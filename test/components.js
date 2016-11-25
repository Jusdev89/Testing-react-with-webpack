import React from 'react'
import {expect} from 'chai'
import {mount,shallow} from 'enzyme'
import App from '../browser/components/App'
import ListItem from '../browser/components/ListItem'
import {todoList, newTodoList} from '../data/list'

describe('Testing React components', () => {
  describe('<App />', () => {
    it('test setting props', () => {
      const wrapper = mount(<App todoList={todoList} />)
      expect(wrapper.props().todoList).to.eql(todoList)
      wrapper.setProps({todoList: newTodoList})
      expect(wrapper.props().todoList).to.eql(newTodoList)
    })
  })
  describe('<ListItem />', () => {
    it('simulate a click event', () => {
      const wrapper = mount(<ListItem item={newTodoList[0]} />)
      wrapper.find('button').simulate('click')
      expect()
    })
  })
})
