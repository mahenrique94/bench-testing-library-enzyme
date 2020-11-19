import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import { store } from '../../redux'
import Todo from '../Todo'

describe('Tests for Todo component', () => {
  it('Should render successfully withou crash', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Todo />
      </Provider>
    )
    expect(wrapper.find('[data-testid="btn-add"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="btn-add"]').text()).toEqual('Add')

    expect(wrapper.find('[data-testid="tasks-item"]').exists()).toBeFalsy()

    wrapper.find('[data-testid="field-task"]').simulate('input', {
      target: {
        value: 'Test',
      },
    })

    wrapper.find('[data-testid="btn-add"]').simulate('submit')

    expect(wrapper.find('[data-testid="tasks-item"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="tasks-item"]').text()).toEqual('Test')
  })
})
