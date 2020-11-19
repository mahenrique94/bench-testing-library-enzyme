import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import { store } from '../../redux'
import Home from '../Home'

describe('Tests for Home page', () => {
  it('Should render successfully withou crash', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Home')
  })
})
