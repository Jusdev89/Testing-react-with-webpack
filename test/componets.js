import React from 'react'
import {expect} from 'chai'
import {mount,shallow} from 'enzyme'
import App from '../browser/components/App'

describe('<App />', () => {
  it('App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.text()).to.eql('Hello World')
    expect(
      wrapper.contains(<div className="unique" />)
    ).to.equal(true)
  })
})
