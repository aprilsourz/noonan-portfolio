import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import {
  LargeTitleText,
  LargeBodyText,
  ExternalLinkLg,
} from "../components/typography"
import { Clouds } from "../components/icons"

import Images from "./FunStuff/Images"

const FunStuff = () => {
  return (
    <>
      <BlackSection>
        <ContentContainer>
          <IntroTextContainer>
            <StyledLargeTitleText>
              Outside of work, you can find me…
            </StyledLargeTitleText>
            <StyledLargeBodyText>
              Crafting, climbing, biking,{" "}
              <ExternalLinkLg
                target="_blank"
                href="https://carriescloudfactory.tumblr.com/"
              >
                illustrating
              </ExternalLinkLg>
              , snowboarding, making cards, quilting, painting, giving presents,
              and straight up day dreaming. I’m a creator by nature - check out
              what I’m up to outside of working hours.
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledClouds />
          <StyledSectionDivider>/ on the side</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <Images />
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
export default FunStuff
