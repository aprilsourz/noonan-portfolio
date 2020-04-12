import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { Link } from "../components/typography"

const StyledHeader = styled.header`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  width: 100%;
  position: fixed;
  top: 0;
`

const LogoPlaceHolder = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  left: 15px;
  top: 50%;
  transform: translateY(-50%);

  ${breakpoint("tablet")`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`

const StyledLink = styled(Link)`
  font-family: "Raleway Regular", sans-serif;
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
  right: 15px;
  width: 145px;

  ${breakpoint("tablet")`
    width: 210px;
  `}

  ${breakpoint("desktop")`
    right: 135px;
  `}
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
