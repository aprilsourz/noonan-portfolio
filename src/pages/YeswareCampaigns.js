import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { LargeTitleText, LargeBodyText } from "../components/typography"
import { ContentContainer } from "../components/layout"
import ProjectButtons from "../components/ProjectButtons"

const StyleGuide = () => {
  return (
    <LightGreyContainer>
      <ProjectButtons />
      <ContentContainer style={{ maxWidth: "920px" }}>
        <BlueTitle>Decreasing user experience friction</BlueTitle>
        <SubTitle>
          Can we increase Yesware Campaigns user satisfaction and close the gap
          between expected behavior and what is intuitive to users?
        </SubTitle>
      </ContentContainer>
    </LightGreyContainer>
  )
}

const LightGreyContainer = styled.div`
  padding-top: 90px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
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

export default StyleGuide
