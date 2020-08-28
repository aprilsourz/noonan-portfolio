import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import surfacingDataAndInsights from "../../src/img/surfacing-data/00-reporting-header-image.png"

import { FullWidthBackground, ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import {
  LargeBodyText,
  HeaderLg,
  HeaderMd,
  BodyText,
} from "../components/typography"

import ProjectBackground from "../components/ProjectBackground"
import Goals from "./SurfacingDataAndInsights/Goals"
import InterfaceAndDataIterations from "./SurfacingDataAndInsights/InterfaceAndDataIterations"
import Sketches from "./SurfacingDataAndInsights/Sketches"
import DesignRoundOne from "./SurfacingDataAndInsights/DesignRoundOne"
import DesignRoundsTwoAndThree from "./SurfacingDataAndInsights/DesignRoundsTwoAndThree.js"
import LookingAhead from "./SurfacingDataAndInsights/LookingAhead.js"
import InterfaceNuances from "./SurfacingDataAndInsights/InterfaceNuances"

const SurfacingDataAndInsights = ({ history }) => (
  <>
    <HeadlineContainer>
      <ProjectButtons history={history} />
      <ContentContainer style={{ maxWidth: "930px", textAlign: "center" }}>
        <GreenHeaderLg>Surfacing data and insights</GreenHeaderLg>
        <LargeBodyTextWithMargin>
          Can we deliver customer value by connecting data around content,
          recipient engagement, and sales rep activity?
        </LargeBodyTextWithMargin>
        <HeaderImage src={surfacingDataAndInsights} />
      </ContentContainer>
    </HeadlineContainer>
    <ProjectBackground
      bio="I have been the Lead Designer for Yesware’s data-focused team since August of 2019. The team is led by myself, a product manager - Caro, and an engineering lead. The team consists of four to five engineers. My role as lead designer has been to help discover how Yesware can better utilize the data we have access to. And to understand how we can surface that data to our users in a way that will help them to change their behavior and make better decisions."
      skills={
        <>
          Discovery & Exploration <br />
          User Research <br />
          Wireframing & Prototyping <br />
          UX & UI Design <br />
        </>
      }
      dates="Aug '19 - current"
      bgColor="white"
    />
    <FullWidthBackground
      backgroundColor="lightGreen"
      className="responsive-align-center"
    >
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <HeaderMdWithMargin>the problem</HeaderMdWithMargin>
        <BodyText>
          Yesware has a Reports feature that allows users to access several
          different reports showcasing a variety of metrics and data both at the
          personal and team level. After reaching a point where we had created
          five reports and had a few more scheduled to build in the pipeline,
          the necessity for a reporting dashboard was becoming more relevant and
          obvious.
          <br />
          <br />
          This project was started before I joined the data team. My colleague,
          Ryan Tengler, worked with Caro (the team’s Product Manager) to kick
          this project off with a round of research and a variety of initial
          dashboard concepts. Ryan and Caro got this project to a really solid
          point and Ryan had a number of near-final designs, but due to some
          database performance issues, the data team had to shift focus and
          de-prioritize this project.
          <br />
          <br />
          We did some re-organizing of teams and I landed on the data team as
          the new lead designer. I worked with the team on a few other projects
          and eventually this project re-surfaced itself and I picked it back
          up, working with Caro to bring it across the finish line.
        </BodyText>
      </ContentContainer>
    </FullWidthBackground>
    <Goals />
    <InterfaceAndDataIterations />
    <Sketches />
    <DesignRoundOne />
    <DesignRoundsTwoAndThree />
    <LookingAhead />
    <InterfaceNuances />
    <ProjectButtons history={history} />
  </>
)

const HeaderImage = styled.img`
  margin-top: 35px;
  width: 100%;

  ${breakpoint("tablet")`
      margin-top: 70px;
  `}
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGreen};
  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

const GreenHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.green};
  font-size: 22px;
  margin-top: 40px;

  ${breakpoint("tablet")`
    line-height: 41px;
    font-size: 50px;
    margin-top: 75px;
  `}
`
const LargeBodyTextWithMargin = styled(LargeBodyText)`
  font-size: 18px;
  line-height: 26px;

  ${breakpoint("tablet")`
    line-height: 41px;
    font-size: 30px;
    margin-top: 10px;
  `}
`
export default SurfacingDataAndInsights
