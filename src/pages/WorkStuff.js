import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, TextContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import {
  LargeTitleText,
  LargeBodyText,
  ExternalLinkLg,
} from "../components/typography"
import { Rainbow } from "../components/icons"
import Experience from "./WorkStuff/Experience"

const WorkStuff = ({ history }) => {
  return (
    <>
      <BlackSection>
        <ContentContainer>
          <IntroTextContainer>
            <StyledLargeTitleText>
              I've been doing product design at Yesware for the last three
              years.
            </StyledLargeTitleText>
            <StyledLargeBodyText>
              As part of a small design team, I wear all the "product designer"
              hats. User Research, user experience, and user interface design
              all fall into my wheelhouse. I'm the lead designer for two teams
              working under the{" "}
              <ExternalLinkLg> Empowered Teams</ExternalLinkLg> methodology and
              I manage one direct report.
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledRainbow />
          <StyledSectionDivider>/ recent work</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <div>
        <ContentContainer>
          <ProjectSelectorBox
            onClick={() => history.push("/projects/decreasing-friction")}
            color="lightBlue"
          >
            <ProjectSelectorText>Decreasing Friction</ProjectSelectorText>
          </ProjectSelectorBox>
          <ProjectSelectorBox
            onClick={() => history.push("/projects/data-driven-decisions")}
            color="lightPink"
          >
            <ProjectSelectorText>Data-driven Decisions</ProjectSelectorText>
          </ProjectSelectorBox>
          <ProjectSelectorBox
            onClick={() => history.push("/projects/core-users")}
            color="lightGreen"
          >
            <ProjectSelectorText>Understanding core users</ProjectSelectorText>
          </ProjectSelectorBox>
          <Experience />
        </ContentContainer>
      </div>
    </>
  )
}

const IntroTextContainer = styled(TextContainer)`
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

// @TODO: Give this some kind of hover style
const ProjectSelectorBox = styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin-top: 25px;
  text-align: center;
  border-radius: 1px;
  height: 150px;
  cursor: pointer;

  &:first-of-type {
    margin-top: 55px;
  }

  ${breakpoint("tablet")`
     margin-top: 50px;
     height: 300px;

     &:first-of-type {
      margin-top: 85px;
     }
  `}
`

const ProjectSelectorText = styled(LargeBodyText)`
  color: ${({ theme }) => theme.colors.back};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export default WorkStuff
