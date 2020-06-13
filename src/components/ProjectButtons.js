import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ArrowLeft, ArrowRight } from "../components/icons"

import { NavLinkText } from "../components/typography"

const ItalicNavLinkText = styled(NavLinkText)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
`

const RightButton = styled.button`
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

const LeftButton = styled.button`
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

const ProjectButtons = () => {
  return (
    <ButtonContainer>
      <LeftButton>
        <StyledArrowLeft size={24} />
        <ItalicNavLinkText>last project</ItalicNavLinkText>
      </LeftButton>
      <RightButton>
        <ItalicNavLinkText>next project</ItalicNavLinkText>
        <StyledArrowRight size={24} />
      </RightButton>
    </ButtonContainer>
  )
}

export default ProjectButtons
