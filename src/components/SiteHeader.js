import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { withRouter } from "react-router-dom"

import { NavLinkText } from "../components/typography"
import { CnLogoSm } from "../components/icons"

const StyledHeader = styled.header`
  height: 65px;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  width: 100%;
  position: fixed;
  top: 0;
`

const LogoPlaceHolder = styled(CnLogoSm)`
  margin: 0 auto;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  ${breakpoint("tablet")`
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`

const GreenButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  margin-left: auto;

  span {
    color: ${({ theme }) => theme.colors.green};
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.green};

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

const PinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  span {
    color: ${({ theme }) => theme.colors.pink};
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.pink};

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

const LinkContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  right: 15px;
  width: 185px;

  ${breakpoint("tablet")`
    width: 223px;

  `}

  ${breakpoint("desktop")`
    right: 50px;
  `}
`

const SiteHeader = ({ history }) => {
  return (
    <StyledHeader>
      <LogoPlaceHolder onClick={() => history.push("/")} />
      <LinkContainer>
        <PinkButton
          className={window.location.pathname === "/work-stuff" && "active"}
          onClick={() => history.push("/work-stuff")}
        >
          <NavLinkText>work stuff</NavLinkText>
        </PinkButton>
        <GreenButton
          className={window.location.pathname === "/fun-stuff" && "active"}
          onClick={() => history.push("/fun-stuff")}
        >
          <NavLinkText>fun stuff</NavLinkText>
        </GreenButton>
      </LinkContainer>
    </StyledHeader>
  )
}

export default withRouter(SiteHeader)
