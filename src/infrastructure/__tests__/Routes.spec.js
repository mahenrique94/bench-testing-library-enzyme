import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import { store } from '../../redux'
import Routes from '../Routes'

describe('Tests for Routes infrastructure', () => {
  it('Should render Home page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Home')
  })

  it('Should render Blog page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/blog']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Home')
  })

  it('Should render Contact page', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/contact']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(wrapper.find('[data-testid="title-page"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-page"]').text()).toEqual('Home')
  })
})
