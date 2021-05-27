import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { Middleware, applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { ApplicationState, createRootReducer } from './store'
import { ApplicationActions } from './store/actions'

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState, ApplicationActions> {
  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25
  })

  const middlewares = Array<Middleware>(routerMiddleware(history), thunk as ThunkMiddleware<ApplicationState, ApplicationActions>)

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger())
  }

  return createStore<ApplicationState, ApplicationActions, unknown, unknown>(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
