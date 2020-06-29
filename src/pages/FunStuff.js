import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import { LargeTitleText, LargeBodyText } from "../components/typography"
import { Clouds } from "../components/icons"

const WorkStuff = () => {
  return (
    <>
      <BlackSection>
        <ContentContainer>
          <IntroTextContainer>
            <StyledLargeTitleText>
              I'll admit, I'm not a workaholic. There are just too many other
              fun things to do in life!
            </StyledLargeTitleText>
            <StyledLargeBodyText>
              Outside of work I'm a crafter, climber, biker, illustrator,
              amateur baker, laugher, card maker, quilter, snowboarder,
              gift-giver, and a dreamer. Here's a glimpse of my non-work
              creations.
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledClouds />
          <StyledSectionDivider>/ recent work</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <div>
        <ContentContainer>
          <ProjectSelectorBox color="lightBlue"></ProjectSelectorBox>
          <ProjectSelectorBox color="lightPink"></ProjectSelectorBox>
          <ProjectSelectorBox color="lightGreen"></ProjectSelectorBox>
        </ContentContainer>
      </div>
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
  background-color: ${({ theme }) => theme.colors.green};
  top: 34px;
  position: relative;
`

const StyledClouds = styled(Clouds)`
  display: block;
  margin: 0 auto;
  margin-top: 47.5px;
  margin-bottom: -17px;

  ${breakpoint("tablet")`
    margin-top: 95px;
    margin-bottom: 35px;
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
  color: ${({ theme }) => theme.colors.green};
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
