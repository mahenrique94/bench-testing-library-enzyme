import React from 'react'

import Todo from '../components/Todo'
import App from '../layouts/App'

const Home = () => (
  <App>
    <h1 data-testid="title-page">Home</h1>
    <Todo />
  </App>
)

export default Home
