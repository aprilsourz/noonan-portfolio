import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ContentContainer, FullWidthBackground } from "../../components/layout"

import { BodyText, BoldBodyText } from "../../components/typography"
import SectionDivider from "../../components/SectionDivider"

const ResultsAndTakeAways = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider color="white" backgroundColor="blue">
          / results and takeaways
        </SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyTextWithMargin60>
          This was a big project with a lot of workflow changes. I ended up
          having to touch upwards of 60 different screens within the Campaigns
          feature to create consistency throughout the interface and make sure
          every workflow was cohesive.
        </BodyTextWithMargin60>
        <BodyTextWithMargin40>
          After implementing the majority of our scoped changes, we began to see
          positive results in user behavior:
        </BodyTextWithMargin40>
        <BlueRectangle>
          <BoldBodyText>
            60% of senders clicked on recipient names to preview how each step
            would appear
          </BoldBodyText>
        </BlueRectangle>
        <BlueRectangle>
          <BoldBodyText>
            32% of senders clicked the new “Edit for # recipients” to make a
            bulk change
          </BoldBodyText>
        </BlueRectangle>
        <BlueRectangle>
          <BoldBodyText>
            32% of senders saved a personalization for a single recipient
          </BoldBodyText>
        </BlueRectangle>
        <div style={{ marginTop: "20px" }}>
          <BodyText>
            These results showed that the flow changes we had released were
            making it possible for users to make a clearer distinction between
            the “Add Recipients” mode and the “Edits” mode in Campaigns. Users
            could now understand which actions could be taken in each mode and
            make the correct changes needed while a campaign was in progress.
          </BodyText>
          <BodyTextWithMargin40>
            The undertaking of this project, while a high level of effort both
            on the design and engineering side, paid off. We had created a more
            intuitive experience for our users and we saw a decrease in support
            tickets around these workflows.
          </BodyTextWithMargin40>
        </div>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const BodyTextWithMargin60 = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
     margin-top: 60px;

  `}
`

const BodyTextWithMargin40 = styled(BodyText)`
  margin-top: 20px;

  ${breakpoint("tablet")`
     margin-top: 40px;

  `}
`

const BlueRectangle = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.blue};
  margin: 10px auto 0;
  padding: 5px;
  max-width: 1000px;

  :first-of-type {
    margin-top: 20px;
  }

  ${breakpoint("tablet")`
    padding: 20px;
  `}
`

export default ResultsAndTakeAways
