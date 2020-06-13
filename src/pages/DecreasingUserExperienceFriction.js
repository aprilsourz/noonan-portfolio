import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import yeswareAnnSmith from "../img/yeswareAnnSmith.png"
import {
  ContentContainer,
} from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import {
  LargeTitleText,
  LargeBodyText,
} from "../components/typography"

import DesignResearchIterate from "./YeswareCampaignsProject/DesignResearchIterate"
import GoalsExplorationAndResearch from "./YeswareCampaignsProject/GoalsExplorationAndResearch"
import ProjectBackground from "./YeswareCampaignsProject/ProjectBackground"
import ResearchRoundOne from "./YeswareCampaignsProject/ResearchRoundOne"
import ResearchRoundTwo from "./YeswareCampaignsProject/ResearchRoundTwo"
import ResultsAndTakeAways from "./YeswareCampaignsProject/ResultsAndTakeAways"
import Scenarios from "./YeswareCampaignsProject/Scenarios"
import TheProblem from "./YeswareCampaignsProject/TheProblem"
import Workflows from "./YeswareCampaignsProject/Workflows"

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
      <ProjectBackground />
      <TheProblem />
      <GoalsExplorationAndResearch />
      <Scenarios />
      <ResearchRoundOne/>
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
