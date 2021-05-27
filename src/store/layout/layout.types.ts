import { ActionType } from '../../utils/action'

export type ThemeColors = 'light' | 'dark'

export const SET_THEME = '@@layout/SET_THEME'

export interface LayoutState {
  readonly theme: ThemeColors
}

export type LayoutActionType = ActionType<typeof SET_THEME, ThemeColors>
