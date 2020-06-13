import breakpoint from "styled-components-breakpoint"
import Grid from "styled-components-grid"
import React from "react"
import styled from "styled-components"

import {
  ContentContainer,
  TextContainer,
  FullWidthBackground,
} from "../../components/layout"
import { HeaderMd, BodyText, BoldBodyText } from "../../components/typography"

const ProjectBackground = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="lightPink"
  >
    <CustomContentContainer style={{ maxWidth: "1040px" }}>
      <BackgroundContainer>
        <TextContainer>
          <HeaderMdWithMargin>background</HeaderMdWithMargin>
          <BodyText>
            I was the Lead Designer for the team working on Yesware's Campaigns
            feature for almost two years. During my time, the team consisted of
            myself, a product manager, an engineering lead, and four engineers.
            Campaigns is one of Yesware's more complex features and I worked on
            many different Campaigns projects from a complete redesign to the
            addition of new functionality and capabilities both large and small.
          </BodyText>
        </TextContainer>
      </BackgroundContainer>
      <RoleContainer>
        <TextContainer>
          <HeaderMdWithMargin>role</HeaderMdWithMargin>
          <BoldBodyTextWithMargin>Lead Product Designer</BoldBodyTextWithMargin>
          <BodyTextWithMargin>
            Discovery & Exploration <br />
            User Research <br />
            Wireframing & Prototyping <br />
            UX & UI Design <br />
          </BodyTextWithMargin>
          <BodyTextWithMargin style={{ fontStyle: "italic" }}>
            Mar '18 - Dec '19
          </BodyTextWithMargin>
        </TextContainer>
      </RoleContainer>
    </CustomContentContainer>
  </FullWidthBackground>
)

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
`}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const CustomContentContainer = styled(ContentContainer)`
  max-width: 1020px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${breakpoint("tablet")`
    justify-content: space-between;
  `}
`

const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 700px;
`

const RoleContainer = styled.div`
  width: 100%;
  max-width: 270px;
`

export default ProjectBackground
