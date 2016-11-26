import {
  React,
  expect,
  mount,
  shallow,
  App,
  ListItem,
  todoList,
  newTodoList
} from './setup'

describe('Testing React components', () => {
  describe('<App />', () => {
    it('tests setting props', () => {
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
      expect(wrapper.state().item).to.eql('New Text')
    })
  })
})
