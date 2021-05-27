import { SET_THEME, ThemeColors } from './layout.types'
import { ApplicationActions } from '../actions'

export const setTheme = (theme: ThemeColors): ApplicationActions => ({
  type: SET_THEME,
  payload: theme
})
