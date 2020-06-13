import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import {
  FullWidthBackground,
  TextContainer,
  ContentContainer,
} from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"
import { LargeBodyText, HeaderLg } from "../components/typography"

const MakingDataDrivenDecisions = () => (
  <>
    <HeadlineContainer>
      <ProjectButtons />
      <ImagePlaceHolderText>Image</ImagePlaceHolderText>
    </HeadlineContainer>
    <ProjectButtons />
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1020px" }}>
        <PinkHeaderLg>Making Data-driven decisions</PinkHeaderLg>
        <LargeBodyTextWithMargin>
          What data can Yesware surface that will have an impact on user
          behavior and decision making
        </LargeBodyTextWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

export default MakingDataDrivenDecisions

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
    font-size: 30px
    margin-top: 6px;
  `}
`
