import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import Contact from '../Contact'

describe('Tests for Contact page', () => {
  it('Should render successfully withou crash', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )
    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Contact')
  })
})
