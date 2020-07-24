import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"
import Grid from "styled-components-grid"

import { ContentContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import {
  LargeTitleText,
  LargeBodyText,
  ExternalLinkLg,
  HeaderLg,
} from "../components/typography"
import { Rainbow } from "../components/icons"
import Experience from "./WorkStuff/Experience"
import decreasingUserExperienceFriction from "../img/decreasing-user-friction_header-image.png"
import dataDrivenDecisions from "../img/data-driven-decisions.png"

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
              {/* working under the{" "}
              <ExternalLinkLg
                target="_blank"
                href="https://www.producttalk.org/2020/05/product-outcomes/"
              >
                {" "}
                Empowered Teams
              </ExternalLinkLg>{" "}
              methodology  */}
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledRainbow />
          <StyledSectionDivider>/ recent work</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <ContentContainer>
        <ProjectSelectorContainer>
          <ProjectSelectorBox
            onClick={() => history.push("/projects/decreasing-friction")}
            color="lightBlue"
          >
            <ProjectSelectorText color="blue">
              Decreasing user experience friction
            </ProjectSelectorText>
            <ImageContainer>
              <Image src={decreasingUserExperienceFriction} />
            </ImageContainer>
          </ProjectSelectorBox>
          <ProjectSelectorBox
            onClick={() => history.push("/projects/data-driven-decisions")}
            color="lightPink"
          >
            <ProjectSelectorText color="pink">
              Making data-driven decisions
            </ProjectSelectorText>
            <ImageContainer>
              <Image src={dataDrivenDecisions} />
            </ImageContainer>
          </ProjectSelectorBox>
        </ProjectSelectorContainer>
        <Experience />
      </ContentContainer>
    </>
  )
}

const Image = styled.img`
  width: 100%;
  position: relative;
  z-index: -1;
`

const ImageContainer = styled.div`
  max-width: 577px;
  margin: 25px auto;
  display: none;

  ${breakpoint("tablet")`
    display: block;
    padding: 0px;
  `}
`

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

// @TODO: Give this some kind of hover style
const ProjectSelectorBox = styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  border-radius: 1px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  overflow: hidden;
  max-width: 600px;
  height: 150px;
  width: 100%;
  margin: 0 auto;

  &:not(:first-of-type) {
    margin-top: 20px;
  }

  ${breakpoint("tablet")`
    height: 350px;
    width: 49%;

    &:not(:first-of-type) {
      margin-top: 0px;
    }
  `};
`

const ProjectSelectorText = styled(HeaderLg)`
  color: ${({ theme, color }) => theme.colors[color]};
  position: relative;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${breakpoint("tablet")`
    left: 0;
    top: 0;
    transform: unset;
    margin-top: 39px;
    margin-left: 56px;
    text-align: left;
    max-width: 509px;
  `}
`

const ProjectSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
`
export default WorkStuff
