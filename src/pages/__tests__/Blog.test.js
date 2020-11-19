import { MemoryRouter } from 'react-router'
import { render, screen } from '@testing-library/react'

import Blog from '../Blog'

describe('Tests for Blog page', () => {
  it('Should render successfully withou crash', () => {
    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    )
    expect(screen.getByTestId('title-page')).toBeInTheDocument()
    expect(screen.getByTestId('title-page').textContent).toEqual('Blog')
  })
})
