import { css } from '@emotion/react'

const globals = css`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    width: 100%;
    font-size: 1.6rem;
    line-height: 1.6;
    font-weight: 300;
    letter-spacing: 0.01em;
    overflow-y: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: inherit;
  }

  h1 {
    font-size: 4.6rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 1.25;
  }

  h3 {
    font-size: 2.8rem;
    line-height: 1.3;
  }

  h4 {
    font-size: 2.2rem;
    letter-spacing: -0.08rem;
    line-height: 1.35;
  }

  h5 {
    font-size: 1.8rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
  }

  h6 {
    font-size: 1.6rem;
    letter-spacing: 0;
    line-height: 1.4;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  dl,
  ol,
  ul {
    list-style: none;
    margin-top: 0;
    padding-left: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    position: relative;
    vertical-align: middle;
  }

  ul {
    list-style: none;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    border-spacing: 0;
    display: block;
    overflow-x: auto;
    width: 100%;
    font-size: 85%;
    border-collapse: collapse;
  }
`

export default globals
