import 'jsdom-global/register'; //at the top of file , even  , before importing react
//https://github.com/airbnb/enzyme/issues/341#issuecomment-263045603
import React from 'react';
// the main tools/environemnt
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';

// test setup stuff
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// trying to get rid of the warning
import 'raf/polyfill';

import Foo from '../Foo.js';

//spying using sinon
spy(Foo.prototype, 'componentDidMount');
spy(Foo.prototype, 'render');

describe('<Foo />', () => {
  const wrapper = mount(<Foo />);
  it('calls componentDidMount once', () => {
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('calls render once', () => {
    expect(Foo.prototype.render.calledOnce).to.equal(true);
  });
  it('Contains "Hello"', () => {
    expect(wrapper.text()).to.contain('Hello');
  });
  it('Doesnt contain "Bar"', () => {
    expect(wrapper.text()).not.to.contain('Bar');
  });
  it('Renders one child', () => {
    expect(wrapper.children()).to.have.lengthOf(1);
  });
  it('Render has one p element', () => {
    expect(wrapper.children().find('p')).to.have.lengthOf(1);
  });
});
