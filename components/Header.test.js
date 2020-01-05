import * as React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render without errors', function() {
    const wrap = mount(<Header />);
    expect(wrap.find('h1').text()).toBe('Welcome to Next.js!');
  });
});
