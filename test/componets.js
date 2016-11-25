import React from 'react'
import {expect} from 'chai'
import {mount,shallow} from 'enzyme'
import App from '../browser/components/App'
import todoList from '../data/list'
import {jsdom} from 'jsdom'

const doc = jsdom('<!doctype html></html><body></body></html>')
global.document = doc
global.window = doc.defaultView

describe('<App />', () => {
  it('this aspects of the <App /> component', () => {
    const wrapper = mount(<App todoList={todoList} />)
    expect(wrapper.props().todoList).to.eql(todoList)
  })
})
