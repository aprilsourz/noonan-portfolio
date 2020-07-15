import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { FullWidthBackground, ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import {
  LargeBodyText,
  HeaderLg,
  HeaderMd,
  BodyText,
} from "../components/typography"

import ProjectBackground from "../components/ProjectBackground"

const MakingDataDrivenDecisions = ({ history }) => (
  <>
    <HeadlineContainer>
      <ProjectButtons history={history} />
      <ContentContainer style={{ maxWidth: "930px", textAlign: "center" }}>
        <PinkHeaderLg>Making Data-driven decisions</PinkHeaderLg>
        <LargeBodyTextWithMargin>
          How can we understand what data Yesware could be surfacing that will
          have an impact on user behavior and decision making?
        </LargeBodyTextWithMargin>
      </ContentContainer>
    </HeadlineContainer>
    <ProjectBackground
      bio="I was the Lead Designer for the team working on Yesware's Campaigns
      feature for almost two years. During my time, the team consisted of
      myself, a product manager, an engineering lead, and four engineers.
      Campaigns is one of Yesware's more complex features and I worked on
      many different Campaigns projects from a complete redesign to the
      addition of new functionality and capabilities both large and small."
      skills={
        <>
          Discovery & Exploration <br />
          User Research <br />
          Wireframing & Prototyping <br />
          UX & UI Design <br />
        </>
      }
      dates="Aug '19 - Current"
      bgColor="white"
    />
    <FullWidthBackground backgroundColor="lightPink">
      <ContentContainer style={{ maxWidth: "930px" }}>
        <HeaderMdWithMargin>Title</HeaderMdWithMargin>
        <BodyText>copy</BodyText>
        <div style={{ height: "600px" }} />
      </ContentContainer>
    </FullWidthBackground>

    <ProjectButtons history={history} />
  </>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 1000px;
  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

const PinkHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.pink};
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
export default MakingDataDrivenDecisions
