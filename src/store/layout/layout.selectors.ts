import { LayoutState, ThemeColors } from './layout.types'

export const layoutThemeSelector = (state: LayoutState): ThemeColors => state.theme
