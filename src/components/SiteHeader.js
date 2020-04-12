import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { NavLinkText } from "../components/typography"

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

const GreenButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  height: 34px;
  margin-left: auto;
  border-radius: 1px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;

  span {
    color: ${({ theme }) => theme.colors.green};
    -webkit-transition: color 0.3s ease-out;
    -moz-transition: color 0.3s ease-out;
    -o-transition: color 0.3s ease-out;
    transition: color 0.3s ease-out;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};

    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`

const PinkButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  height: 34px;
  border-radius: 1px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  -webkit-transition: background-color 0.3s ease-out;
  -moz-transition: background-color 0.3s ease-out;
  -o-transition: background-color 0.3s ease-out;
  transition: background-color 0.3s ease-out;

  span {
    color: ${({ theme }) => theme.colors.pink};
    -webkit-transition: color 0.3s ease-out;
    -moz-transition: color 0.3s ease-out;
    -o-transition: color 0.3s ease-out;
    transition: color 0.3s ease-out;
  }

  &:hover {
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

const SiteHeader = () => {
  return (
    <StyledHeader>
      <LogoPlaceHolder />
      <LinkContainer>
        <PinkButton>
          <NavLinkText>work stuff</NavLinkText>
        </PinkButton>
        <GreenButton>
          <NavLinkText>fun stuff</NavLinkText>
        </GreenButton>
      </LinkContainer>
    </StyledHeader>
  )
}

export default SiteHeader
