import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { FullWidthBackground, ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import { LargeBodyText, HeaderLg } from "../components/typography"

import ProjectBackground from "../components/ProjectBackground"

const MakingDataDrivenDecisions = () => (
  <>
    <HeadlineContainer>
      <ProjectButtons />
      <ImagePlaceHolderText>Image</ImagePlaceHolderText>
    </HeadlineContainer>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1020px" }}>
        <div style={{ maxWidth: "990px" }}>
          <PinkHeaderLg>Making Data-driven decisions</PinkHeaderLg>
          <LargeBodyTextWithMargin>
            What data can Yesware surface that will have an impact on user
            behavior and decision making
          </LargeBodyTextWithMargin>
        </div>
      </ContentContainer>
    </FullWidthBackground>
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
      dates="Aug '19 - Dec '19"
      bgColor="lightPink"
    />
    <div style={{ height: "600px" }} />
    <ProjectButtons />
  </>
)

const HeadlineContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  ${breakpoint("tablet")`
    padding-bottom: 80px;
  `}
`

const ImagePlaceHolderText = styled(HeaderLg)`
  margin: 275px 0;
  text-align: center;
  font-weight: 300;
`

const PinkHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.pink};
  font-size: 22px;

  ${breakpoint("tablet")`
    line-height: 41px;
    font-size: 50px;
    margin-top: 6px;
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
