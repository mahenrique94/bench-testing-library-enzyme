import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import { store } from '../../redux'
import Home from '../Home'

describe('Tests for Home page', () => {
  it('Should render successfully withou crash', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Home')
  })
})
