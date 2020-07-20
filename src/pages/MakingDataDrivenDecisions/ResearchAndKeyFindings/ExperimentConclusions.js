import breakpoint from "styled-components-breakpoint"

import React from "react"
import styled from "styled-components"

import {
  ContentContainer,
  FullWidthBackground,
} from "../../../components/layout"
import { BodyText, HeaderMd } from "../../../components/typography"

const ExperimentConclusions = () => (
  <ContentContainer style={{ maxWidth: "1040px" }}>
    <HeaderMdWithMargin>experiment conclusions</HeaderMdWithMargin>
    <BodyTextWithMargin>
      Overall, users ranked the “Activity across accounts” and “Time spent on
      accounts by activity” charts as the most valuable ways to surface data.
      The data surfaced in these reports proved to solve for a few use cases:
    </BodyTextWithMargin>
    <BodyTextWithMargin>
      1. Helping users prioritize their time and who to talk to
      <br />
      2. Helping users understand how they are currently spending their time and
      how they could spend it better
      <br />
      3. Helping users understand what activities and/or patterns of activities
      are leading to success
      <br />
      4. Helping users keep things from falling through the cracks with various
      opportunities
    </BodyTextWithMargin>
    <BodyTextWithMargin>
      <strong style={{ fontWeight: 400 }}>The Value of Real Data</strong>
      <br />
      Showing users their own real data was a huge win. When users could see
      real numbers related to their actual accounts and confirm that the data
      accurately reflected what they were doing with those opportunities, their
      feedback became much richer and they were able to much better understand
      what kind of value these reports could provide for them.
    </BodyTextWithMargin>
    <BodyTextWithMargin>
      <strong style={{ fontWeight: 400 }}> Next Steps</strong>
      <br />
      1. Based on the research, we updated our opportunity solution tree to
      better reflect what we’d learned
      <br />
      2. We recommended some solutions we could implement to focus on how users
      are spending their time
      <br />
      3. We created a ticket for one of the data teams and recommended that they
      explore options around building out an “Activity per Opportunity” report
    </BodyTextWithMargin>
  </ContentContainer>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-top: 24px;

  ${breakpoint("tablet")`
    margin-top: 48px;
  `}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

export default ExperimentConclusions
