import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'
import Container from './Container'

const Wrapper = styled('header')`
  padding: 2rem 0;
  background: transparent;
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts.headings};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 0;
  }
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`

const HeaderLeft = styled('div')`
  padding-right: 1rem;
`

const HeaderNav = styled('nav')`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
  border-top: 1px solid ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.white};
  padding: 1.5rem 0;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 0;
    border: none;
    justify-content: flex-end;
  }
`

const HeaderNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0 1rem;
  border-bottom: 1rem;
  display: inline-block;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #3b99fc;
  }

  &.is-active {
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #3b99fc;
    }
  }

  svg {
    font-size: 20px;
  }

  &.btn {
    padding: 8px 15px;
    border-radius: 100px;
    &.btn-primary {
      background: #4586ff;
      color: white;
    }
  }
`

const Title = styled('h2')`
  margin-bottom: 0;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0;
  }
  font-size: 2.8rem;
  font-weight: 300;
  color: #0366d6;
  font-family: 'Pacifico', cursive;
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <NavLink to="/">
          <Title>{title}</Title>
        </NavLink>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink exact to="/" activeClassName="is-active">
          Home
        </HeaderNavLink>
        <HeaderNavLink to="/courses" activeClassName="is-active">
          Courses
        </HeaderNavLink>
        <HeaderNavLink to="/teachers" activeClassName="is-active">
          Teachers
        </HeaderNavLink>
        <HeaderNavLink to="/about" activeClassName="is-active">
          About
        </HeaderNavLink>
        <HeaderNavLink to="/events" activeClassName="is-active">
          Events
        </HeaderNavLink>
        <HeaderNavLink to="/news" activeClassName="is-active">
          News
        </HeaderNavLink>
        <HeaderNavLink to="/started" className="btn btn-primary">
          Get Started
        </HeaderNavLink>
      </HeaderNav>
    </HeaderInner>
  </Wrapper>
)

export default Header
