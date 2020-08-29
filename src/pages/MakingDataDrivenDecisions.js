import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import dataDrivenDecisions from "../../src/img/data-driven-decisions.png"

import { ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import ProjectBackground from "../components/ProjectBackground"
import { LargeBodyText, HeaderLg } from "../components/typography"
import TheProblem from "../components/TheProblem"

import GuidedSelling from "./MakingDataDrivenDecisions/GuidedSelling"
import TheExperiment from "./MakingDataDrivenDecisions/TheExperiment"
import Charts from "./MakingDataDrivenDecisions/Charts"
import ResearchAndKeyFindings from "./MakingDataDrivenDecisions/ResearchAndKeyFindings"
import ResultsAndTakeAways from "./MakingDataDrivenDecisions/ResultsAndTakeaways"

const MakingDataDrivenDecisions = ({ history }) => (
  <>
    <HeadlineContainer>
      <ProjectButtons history={history} />
      <ContentContainer style={{ maxWidth: "930px", textAlign: "center" }}>
        <PinkHeaderLg>Making data-driven decisions</PinkHeaderLg>
        <LargeBodyTextWithMargin>
          How can we provide meaningful insights and recommendations that will
          help increase sales success for our users?
        </LargeBodyTextWithMargin>
        <HeaderImage src={dataDrivenDecisions} />
      </ContentContainer>
    </HeadlineContainer>
    <ProjectBackground
      bio="During Q2 and Q3 of 2019, I worked on a small “experimental” team consisting of myself as lead designer, one product manager, and one of our principal engineers. The purpose of this team was to work as quickly as possible implementing small but tangible “experiments” that would validate (or invalidate) certain hypotheses and assumptions we had around surfacing data to users. By working this way, our hope was to come to a quick and clear understanding of what bigger data projects would be most valuable for our data teams to invest in."
      skills={
        <>
          Discovery & Exploration <br />
          User Research <br />
          Wireframing & Prototyping <br />
          UX & UI Design <br />
        </>
      }
      dates="Aug '19 - October '19"
      backgroundColor="white"
    />
    <TheProblem backgroundColor="lightPink" blocksOfText={problemSectionText} />
    <GuidedSelling />
    <TheExperiment />
    <Charts />
    <ResearchAndKeyFindings />
    <ResultsAndTakeAways />
    <ProjectButtons history={history} />
  </>
)

const problemSectionText = [
  `We believed that in order to create lasting, differentiated and hard to replace value for our users, Yesware needed to be providing meaningful insights and recommendations that would help increase sales success - we termed this “Guided Selling”. But with anything data-related, there were SO MANY opportunities, and although we had access to good data and knew we wanted to start leveraging it, we didn’t know where to start.`,
  `Our other concern was the potential for any data project to be largely complex, have a high level of effort, and require a big time investment. We didn’t have enough information to feel comfortable committing an engineering team to a complex and time consuming project. So to move things forward, our small team was tasked with running small experiments with the goal of narrowing down and understanding what types of “guided selling” would have the highest impact on end user success.`,
]

const HeaderImage = styled.img`
  margin-top: 35px;
  width: 100%;

  ${breakpoint("tablet")`
      margin-top: 70px;
  `}
`

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.whitePinkTint};

  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

const PinkHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 40px;
  margin-top: 40px;
  line-height: 45px;
  

  ${breakpoint("tablet")`
    line-height: 41px;
    font-size: 50px;
    margin-top: 75px;
  `}
`
const LargeBodyTextWithMargin = styled(LargeBodyText)`
  font-size: 18px;
  line-height: 26px;
  margin-top: 10px;

  ${breakpoint("tablet")`
    line-height: 41px;
    font-size: 30px;
    margin-top: 10px;
  `}
`
export default MakingDataDrivenDecisions
