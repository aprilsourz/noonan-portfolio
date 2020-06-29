import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import nextProjectPageUrl from "../utils/nextProjectPageUrl"

import { ArrowLeft, ArrowRight } from "./icons"
import { NavLinkText } from "./typography"

const ItalicNavLinkText = styled(NavLinkText)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
`

const ForwardButton = styled.button`
  margin-left: auto;
  width: 140px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.pink};

  ${breakpoint("tablet")`
    left: -50px;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPink};
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  position: relative;
  position: relative;
  left: -7px;
  top: 2px;
`
const StyledArrowRight = styled(ArrowRight)`
  position: relative;
  position: relative;
  right: -7px;
  top: 2px;
`

const BackButton = styled.button`
  width: 140px;
  background-color: ${({ theme }) => theme.colors.pink};
  position: relative;

  ${breakpoint("tablet")`
     right: -50px;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPink};
  }
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;

  &:last-of-type {
    margin-bottom: 25px;
  }

  ${breakpoint("tablet")`
    &:last-of-type {
      margin-bottom: 50px
    }
  `}
`

const ProjectButtons = ({ history }) => {
  const backUrl = nextProjectPageUrl(history.location.pathname, "back")
  const forwardUrl = nextProjectPageUrl(history.location.pathname, "forward")

  return (
    <ButtonContainer>
      <BackButton onClick={() => history.push(backUrl)}>
        <StyledArrowLeft size={24} />
        <ItalicNavLinkText>last project</ItalicNavLinkText>
      </BackButton>
      <ForwardButton onClick={() => history.push(forwardUrl)}>
        <ItalicNavLinkText>next project</ItalicNavLinkText>
        <StyledArrowRight size={24} />
      </ForwardButton>
    </ButtonContainer>
  )
}

export default ProjectButtons
