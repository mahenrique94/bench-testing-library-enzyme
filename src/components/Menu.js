import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;
`

const StyledList = styled.ul`
  display: flex;
`

const StyledLink = styled(Link)`
  color: black;
  margin-right: 2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const StyledItem = styled.li`
  list-style: none;
  &:last-child {
    ${StyledLink} {
      margin-right: 0;
    }
  }
`

const Menu = () => (
  <StyledMenu>
    <StyledList>
      <StyledItem>
        <StyledLink data-testid="menu-link" to="/">Home</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink data-testid="menu-link" to="/blog">Blog</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink data-testid="menu-link" to="/contact">Contact</StyledLink>
      </StyledItem>
    </StyledList>
  </StyledMenu>
)

export default Menu
