import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ContentContainer, FullWidthBackground } from "../../components/layout"

import { BodyText } from "../../components/typography"
import SectionDivider from "../../components/SectionDivider"

const ResultsAndTakeAways = () => (
  <>
    <FullWidthBackground backgroundColor="white" style={{ height: "750px" }}>
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider color="white" bgColor="blue">
          / results and takeaways
        </SectionDivider>
        <BodyTextWithMargin>
          Due to conflicting priorities for our team, we put this project down
          for a few months and picked it back up in October of 2018. In the time
          that passed, it had become clear that in order to truly create an
          intuitive workflow for in-progress" edits, we would also need to
          visually redesign several key Ul components of the feature. Our
          highest priorities were to:
        </BodyTextWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
     margin-top: 60px;

  `}
`

export default ResultsAndTakeAways
