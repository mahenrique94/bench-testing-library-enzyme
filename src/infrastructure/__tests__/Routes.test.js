import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import { store } from '../../redux'
import Routes from '../Routes'

describe('Tests for Routes infrastructure', () => {
  it('Should render Home page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Home')
  })

  it('Should render Blog page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/blog']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Home')
  })

  it('Should render Contact page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/contact']}>
          <Routes />
        </MemoryRouter>
      </Provider>
    )

    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Home')
  })
})
