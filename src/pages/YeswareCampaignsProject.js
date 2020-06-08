import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"

import yeswareAnnSmith from "../img/yeswareAnnSmith.png"
import {
  ContentContainer,
  TextContainer,
  FullWidthBackground,
} from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import {
  LargeTitleText,
  LargeBodyText,
  HeaderSm,
  BodyText,
  BoldBodyText,
  NumberedBlock,
  BlueNumber,
  NumberedBlockText,
} from "../components/typography"

import DesignResearchIterate from "./YeswareCampaignsProject/DesignResearchIterate"
import GoalsExplorationAndResearch from "./YeswareCampaignsProject/GoalsExplorationAndResearch"
import ProjectBackground from "./YeswareCampaignsProject/ProjectBackground"
import Scenarios from "./YeswareCampaignsProject/Scenarios"
import TheProblem from "./YeswareCampaignsProject/TheProblem"
import Workflows from "./YeswareCampaignsProject/Workflows"
import ResearchRoundTwo from "./YeswareCampaignsProject/ResearchRoundTwo"

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
      <FullWidthBackground
        className="responsive-align-center"
        backgroundColor="white"
      >
        <ContentContainer style={{ maxWidth: "1030px" }}>
          <TextContainer>
            <BlueHeaderSm>RESEARCH ROUND ONE</BlueHeaderSm>
            <BodyTextWithMargin>
              After listing out our scenarios, I mocked up two different
              workflows that would solve for the most high priority scenarios
              and we kicked off our first round of user research. Our goals for
              the research were to know if users found the designs easy to
              understand and navigate, if there were any interactions that
              needed to be reworked, and if users understood what they were
              editing and who it would impact.
            </BodyTextWithMargin>
            <BodyTextWithMargin>
              We did 7 interviews with customers who were frequent users of
              Campaigns and we asked each user to complete specific tasks like:
            </BodyTextWithMargin>
          </TextContainer>
          <ExampleContainer>
            <BlueExampleBox>
              <BoldBodyText style={{ fontWeight: "300" }}>
                “You realize you have a typo in Touch 2. How would you correct
                it?”
              </BoldBodyText>
            </BlueExampleBox>
            <BlueExampleBox>
              <BoldBodyText style={{ fontWeight: "300" }}>
                “You find out that one of your prospects, George Oscar Bluth,
                actually goes by Gob Bluth. He’s about to receive several
                automated email touches and you want to greet him by “Gob”
                instead of “George”. How would you change this information?”
              </BoldBodyText>
            </BlueExampleBox>
          </ExampleContainer>
          <TextContainer>
            <BoldBodyTextWithMargin>
              Our most important findings:
            </BoldBodyTextWithMargin>
            <GridWithMargin>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
                <NumberedBlock>
                  <BlueNumber>1 )</BlueNumber>
                  <NumberedBlockText>
                    We were able to see firsthand several of the ways users
                    misinterpreted and misused the existing workflow and
                    therefore expected one outcome but received another.
                  </NumberedBlockText>
                </NumberedBlock>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
                <NumberedBlock>
                  <BlueNumber>2 )</BlueNumber>
                  <NumberedBlockText>
                    Most users felt that the “overlay” Ul was the most user
                    friendly and did the best job of helping the user understand
                    what they were and were not editing.
                  </NumberedBlockText>
                </NumberedBlock>
              </Grid.Unit>
            </GridWithMargin>
          </TextContainer>
        </ContentContainer>
      </FullWidthBackground>
      <Workflows />
      <DesignResearchIterate />
      <ResearchRoundTwo/>
    </>
  )
}

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const GridWithMargin = styled(Grid)`
  margin-top: 12px;

  ${breakpoint("tablet")`
  margin-top: 25px;
  `}
`

const ExampleContainer = styled.div`
  margin-top: 12px;
  padding: 0 20px;

  ${breakpoint("tablet")`
  margin-top: 25px;
`}
`
const BlueExampleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.blue};
  padding: 20px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
      padding-left: 20px;
      padding-right: 50px;
  `}
`

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

const BlueHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.blue};
`

export default YeswareCampaignsProject
