import { combineReducers, Reducer } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { layoutReducer, LayoutState } from './layout'

export interface ApplicationState {
  layout: LayoutState
}

export const createRootReducer = (history: History): Reducer =>
  combineReducers({
    layout: layoutReducer,
    router: connectRouter(history)
  })
