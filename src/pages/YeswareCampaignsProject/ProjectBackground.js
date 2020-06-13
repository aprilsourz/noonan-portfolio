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
    backgroundColor="white"
  >
    <ContentContainer style={{ maxWidth: "1020px" }}>
      <Grid>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <HeaderMdWithMargin>background</HeaderMdWithMargin>
            <BodyText>
              I was the Lead Designer for Yesware's Campaigns feature for almost
              two years. The team consisted of myself, a product manager, an
              engineering lead, and four engineers. Campaigns is one of
              Yesware's more complex features and I worked on many different
              Campaigns projects from a complete redesign to the addition of new
              functionality and capabilities both large and small.
            </BodyText>
          </TextContainer>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <TextContainer>
            <HeaderMdWithMargin>role</HeaderMdWithMargin>
            <BoldBodyTextWithMargin>
              Lead Product Designer
            </BoldBodyTextWithMargin>
            <BodyTextWithMargin>
              User Research <br />
              Wireframing & Prototyping <br />
              UX & UI Design <br />
            </BodyTextWithMargin>
            <BodyTextWithMargin style={{ fontStyle: "italic" }}>
              Aug '19 - Dec '19
            </BodyTextWithMargin>
          </TextContainer>
        </Grid.Unit>
      </Grid>
    </ContentContainer>
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

export default ProjectBackground
