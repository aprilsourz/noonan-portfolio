import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import yeswareAnnSmith from "../img/yeswareAnnSmith.png"
import { ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import ProjectBackground from "../components/ProjectBackground"

import { LargeTitleText, LargeBodyText } from "../components/typography"

import DesignResearchIterate from "./DecreasingUserExperienceFriction/DesignResearchIterate"
import GoalsExplorationAndResearch from "./DecreasingUserExperienceFriction/GoalsExplorationAndResearch"
import ResearchRoundOne from "./DecreasingUserExperienceFriction/ResearchRoundOne"
import ResearchRoundTwo from "./DecreasingUserExperienceFriction/ResearchRoundTwo"
import ResultsAndTakeAways from "./DecreasingUserExperienceFriction/ResultsAndTakeAways"
import Scenarios from "./DecreasingUserExperienceFriction/Scenarios"
import TheProblem from "./DecreasingUserExperienceFriction/TheProblem"
import Workflows from "./DecreasingUserExperienceFriction/Workflows"

const YeswareCampaignsProject = () => {
  return (
    <>
      <HeadlineContainer>
        <ProjectButtons />
        <ContentContainer style={{ maxWidth: "930px" }}>
          <BlueTitle>Decreasing user experience friction</BlueTitle>
          <SubTitle>
            Can we increase Yesware Campaigns user satisfaction and close the
            gap between expected behavior and what is intuitive to users?
          </SubTitle>
          <YeswareAnnSmith src={yeswareAnnSmith} />
        </ContentContainer>
      </HeadlineContainer>
      <ProjectBackground
        bio="I was the Lead Designer for Yesware's Campaigns feature for almost
        two years. The team consisted of myself, a product manager, an
        engineering lead, and four engineers. Campaigns is one of Yesware's
        more complex features and I worked on many different Campaigns
        projects from a complete redesign to the addition of new
        functionality and capabilities both large and small."
        skills={
          <>
            User Research <br />
            Wireframing & Prototyping <br />
            UX & UI Design <br />
          </>
        }
        dates="Mar '18 - Dec '19"
        bgColor="white"
      />
      <TheProblem />
      <GoalsExplorationAndResearch />
      <Scenarios />
      <ResearchRoundOne />
      <Workflows />
      <DesignResearchIterate />
      <ResearchRoundTwo />
      <ResultsAndTakeAways />
      <ProjectButtons />
    </>
  )
}

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

const BlueTitle = styled(LargeTitleText)`
  color: ${({ theme }) => theme.colors.blue};
  text-align: center;
  margin-bottom: 15px;
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-bottom: 15px;
    margin-top: 60px;
  `}
`

const SubTitle = styled(LargeBodyText)`
  text-align: center;

  ${breakpoint("tablet")`
      line-height: 40px;
  `}
`

const YeswareAnnSmith = styled.img`
  margin-top: 35px;
  width: 100%;
  -webkit-box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);
  -moz-box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);
  box-shadow: -1px 1px 21px 0px rgba(163, 163, 163, 1);

  ${breakpoint("tablet")`
      margin-top: 70px;
  `}
`

export default YeswareCampaignsProject
