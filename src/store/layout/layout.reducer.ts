import { Reducer } from 'redux'
import { LayoutActionType, SET_THEME, LayoutState } from './layout.types'

const initialState: LayoutState = {
  theme: 'light'
}

const reducer: Reducer<LayoutState, LayoutActionType> = (state = initialState, action: LayoutActionType) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as layoutReducer }
