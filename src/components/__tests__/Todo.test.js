import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'

import { store } from '../../redux'
import Todo from '../Todo'

describe('Tests for Todo component', () => {
  it('Should render successfully withou crash', () => {
    render(
      <Provider store={store}>
        <Todo />
      </Provider>
    )
    expect(screen.getByTestId('btn-add')).toBeInTheDocument()
    expect(screen.getByTestId('btn-add').textContent).toEqual('Add')
    
    try {
      screen.getAllByTestId('tasks-item')
    } catch (error) {
      expect(error.message).toContain('Unable to find an element by: [data-testid="tasks-item"]')
    }

    fireEvent.input(screen.getByTestId('field-task'), {
      target: {
        value: 'Test',
      },
    })

    fireEvent.click(screen.getByTestId('btn-add'))

    expect(screen.getByTestId('tasks-item')).toBeInTheDocument()
    expect(screen.getByTestId('tasks-item').textContent).toEqual('Test')
  })
})
