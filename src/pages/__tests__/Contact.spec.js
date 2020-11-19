import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import Contact from '../Contact'

describe('Tests for Contact page', () => {
  it('Should render successfully withou crash', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Contact')
  })
})
