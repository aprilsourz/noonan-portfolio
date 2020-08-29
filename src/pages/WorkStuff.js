import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import { LargeTitleText, LargeBodyText } from "../components/typography"
import { Rainbow } from "../components/icons"

import ProjectSelectors from "./WorkStuff/ProjectSelectors"
import Experience from "./WorkStuff/Experience"

const WorkStuff = ({ history }) => {
  return (
    <>
      <BlackSection>
        <ContentContainer>
          <IntroTextContainer>
            <StyledLargeTitleText>Hi, I’m Carrie!</StyledLargeTitleText>
            <StyledLargeBodyText>
              As a Senior Designer on a small design team, I wear all the
              “product designer” hats. User research, user experience, and user
              interface design all fall into my wheelhouse. I’m the lead
              designer for two teams and I manage one direct report.
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledRainbow />
          <StyledSectionDivider>/ recent work</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <ContentContainer>
        <ProjectSelectors />
        <Experience />
      </ContentContainer>
    </>
  )
}

const IntroTextContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  ${breakpoint("desktop")`
    width: 1015px;
    padding: 0px;
  `}
`

const StyledSectionDivider = styled(SectionDivider)`
  top: 34px;
  position: relative;
`

const StyledRainbow = styled(Rainbow)`
  display: block;
  margin: 0 auto;
  margin-top: 47.5px;
  margin-bottom: -17px;

  ${breakpoint("tablet")`
    margin-top: 95px;
    margin-bottom: 0px;
  `}
`

const BlackSection = styled.div`
  padding-top: 130px;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 95px;

  ${breakpoint("tablet")`
     padding-top: 195px;
  `}
`
const StyledLargeBodyText = styled(LargeBodyText)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 45px;

  ${breakpoint("tablet")`
    margin-top: 90px;
  `}
`

const StyledLargeTitleText = styled(LargeTitleText)`
  color: ${({ theme }) => theme.colors.pink};
`

export default WorkStuff
