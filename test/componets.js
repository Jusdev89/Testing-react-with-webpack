import React from 'react'
import {expect} from 'chai'
import {mount,shallow} from 'enzyme'
import App from '../browser/components/App'

describe('<App />', () => {
  it('App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
