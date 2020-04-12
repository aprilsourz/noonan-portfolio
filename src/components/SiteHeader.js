import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  width: 100%;
  position: fixed;
  top: 0;
`

const LogoPlaceHolder = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.lightGrey};
`

const StyledLink = styled(Link)`
  font-family: "Raleway Regular", sans-serif;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
`
const GreenLink = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.green};
  margin-left: auto;
`

const PinkLink = styled(StyledLink)`
  color: ${({ theme }) => theme.colors.pink};
`

const LinkContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 210px;
  right: 135px;
`

const SiteHeader = () => {
  return (
    <StyledHeader>
      <LogoPlaceHolder />
      <LinkContainer>
        <PinkLink>work stuff</PinkLink>
        <GreenLink>fun stuff</GreenLink>
      </LinkContainer>
    </StyledHeader>
  )
}

export default SiteHeader
