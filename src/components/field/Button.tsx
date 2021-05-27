import React from 'react'
import styled from '@emotion/styled'

const Button = styled('button')`
  width: 100%;
  border: 1px solid white;
  letter-spacing: 0.1rem;
  line-height: 3.4rem;
  padding: 0 3rem;
  border-radius: 0.4rem;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;
  font-weight: 500;
  &:hover {
    outline: 0;
    background-color: transparent;
    border: 1px solid white;
    color: white;
  }
`

export default Button
