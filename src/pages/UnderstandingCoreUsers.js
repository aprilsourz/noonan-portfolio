import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { FullWidthBackground, ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import { LargeBodyText, HeaderLg } from "../components/typography"

import ProjectBackground from "../components/ProjectBackground"

const UnderstandingCoreUsers = ({ history }) => (
  <>
    <HeadlineContainer>
      <ProjectButtons history={history} />
      <ImagePlaceHolderText>Image</ImagePlaceHolderText>
    </HeadlineContainer>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1020px" }}>
        <div style={{ maxWidth: "990px" }}>
          <GreenHeaderLg>Understanding our core users</GreenHeaderLg>
          <LargeBodyTextWithMargin>
            How will knowing Yesware's core users on a deeper level impact the
            product we build?
          </LargeBodyTextWithMargin>
        </div>
      </ContentContainer>
    </FullWidthBackground>
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
      dates="Jan '19 - March '19"
      bgColor="lightGreen"
    />
    <div style={{ height: "600px" }} />
    <ProjectButtons history={history} />
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

const GreenHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.green};
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

export default UnderstandingCoreUsers
