import React from "react"

import {
  ContentContainer,
  FullWidthBackground,
} from "../../components/layout"

import SectionDivider from "../../components/SectionDivider"

const ResultsAndTakeAways = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider color="white" bgColor="blue">
          / results and takeaways
        </SectionDivider>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

export default ResultsAndTakeAways
