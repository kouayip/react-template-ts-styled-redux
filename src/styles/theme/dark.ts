import { Theme } from '@emotion/react'
import { lighten } from 'polished'
import brandColors from '../colors/brandColors'

const darkTheme: Theme = {
  colors: {
    background: brandColors.gray75,
    body: brandColors.gray10,
    headings: brandColors.gray5,
    black: brandColors.black,
    white: brandColors.white,
    borders: lighten(0.05, brandColors.gray75),
    tableOdd: lighten(0.025, brandColors.gray75),
    brand: brandColors.red,
    attrs: {
      str: '#f44336',
      agi: '#39d402',
      int: '#01a9f4'
    }
  },
  fonts: {
    headings: "'Montserrat', sans-seri",
    body: "'Montserrat', sans-seri",
    montserrat: "'Montserrat', sans-seri"
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem'
  },
  containerPadding: '1.5rem',
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  widths: {
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  heights: {
    header: '60px'
  }
}

export default darkTheme
