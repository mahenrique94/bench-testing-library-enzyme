import React from 'react'
import { Provider } from 'react-redux'

import Routes from '../infrastructure/Routes'
import { store } from '../redux'

const Root = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default Root
