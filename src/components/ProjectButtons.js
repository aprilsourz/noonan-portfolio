import React from "react"
import styled from "styled-components"
import { ArrowLeft, ArrowRight } from "@styled-icons/feather"

import { NavLinkText } from "../components/typography"

const ItalicNavLinkText = styled(NavLinkText)`
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  top: 3px;
`

const RightButton = styled.button`
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.pink};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPink};
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  position: relative;
  left: -4px;
`
const StyledArrowRight = styled(ArrowRight)`
  position: relative;
  right: -4px;
`

const LeftButton = styled.button`
  background-color: ${({ theme }) => theme.colors.pink};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPink};
  }
`

const ButtonContainer = styled.div`
  margin-right: 50px;
  margin-left: 50px;
  display: flex;
  width: 285px;
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
