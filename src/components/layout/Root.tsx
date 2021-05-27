import * as React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.body};
  font-family: ${props => props.theme.fonts.body};
`

interface RootProps {
  className?: string
}

const Root: React.FC<RootProps> = ({ children }) => <Wrapper>{children}</Wrapper>

export default Root
