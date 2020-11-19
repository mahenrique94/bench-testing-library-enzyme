import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import Blog from '../Blog'

describe('Tests for Blog page', () => {
  it('Should render successfully withou crash', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    )
    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Blog')
  })
})
