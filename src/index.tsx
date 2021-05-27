import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore from './configureStore'
import history from './helpers/history'

const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
)
