import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import headerImage from "../img/decreasing-user-friction_header-image.png"
import { ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import ProjectBackground from "../components/ProjectBackground"
import { LargeTitleText, LargeBodyText } from "../components/typography"
import TheProblem from "../components/TheProblem"

import DesignResearchIterate from "./DecreasingUserExperienceFriction/DesignResearchIterate"
import GoalsExplorationAndResearch from "./DecreasingUserExperienceFriction/GoalsExplorationAndResearch"
import ResearchRoundOne from "./DecreasingUserExperienceFriction/ResearchRoundOne"
import ResearchRoundTwo from "./DecreasingUserExperienceFriction/ResearchRoundTwo"
import ResultsAndTakeAways from "./DecreasingUserExperienceFriction/ResultsAndTakeAways"
import Scenarios from "./DecreasingUserExperienceFriction/Scenarios"
import Workflows from "./DecreasingUserExperienceFriction/Workflows"

const DecreasingUserExperienceFriction = ({ history }) => {
  return (
    <>
      <HeadlineContainer>
        <ProjectButtons history={history} />
        <ContentContainer style={{ maxWidth: "930px" }}>
          <BlueTitle>Decreasing user experience friction</BlueTitle>
          <SubTitle>
            Can we increase Yesware Campaigns user satisfaction and close the
            gap between expected behavior and what is intuitive to users?
          </SubTitle>
          <HeaderImage src={headerImage} />
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
      <TheProblem blocksOfText={problemSectionText} />
      <GoalsExplorationAndResearch />
      <Scenarios />
      <ResearchRoundOne />
      <Workflows />
      <DesignResearchIterate />
      <ResearchRoundTwo />
      <ResultsAndTakeAways />
      <ProjectButtons history={history} />
    </>
  )
}

const problemSectionText = [
  `Campaigns is a tool that allows salespeople to send a series of
  customized messages (called “touches") to many recipients at once
  through a number of different channels: email, phone, LinkedIn message,
  etc.`,
  `In May 2018, the Campaigns feature was being adopted by more and more
  users. But the more users using the product, the more signals we started
  to receive that users were experiencing unintuitive behavior and missing
  functionality in the campaign editing workflow.`,
  `At the time, there was no easy way for users to make changes to a
  campaign while there were recipients scheduled to receive touches. If a
  user needed to change the content of an email or change recipient
  details, they had no easy way of doing so. We needed to introduce the
  ability to make edits to an in-progress campaign and make it an intuitive experience.`,
]

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

const HeaderImage = styled.img`
  margin-top: 35px;
  width: 100%;

  ${breakpoint("tablet")`
      margin-top: 70px;
  `}
`

export default DecreasingUserExperienceFriction
