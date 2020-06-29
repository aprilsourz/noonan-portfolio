import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { HeaderMd, BodyText } from "../../components/typography"

const TheProblem = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="lightBlue"
  >
    <ContentContainer style={{ maxWidth: "1020px" }}>
      <HeaderMdWithMargin>the problem</HeaderMdWithMargin>
      <BodyTextWithMargin>
        Campaigns Is a tool that allows salespeople to send a series of
        customized messages (called “touches") to many recipients at once
        through a number of different channels: email, phone, LinkedIn message,
        etc.
      </BodyTextWithMargin>
      <BodyTextWithMargin>
        In May 2018, the Campaigns feature was being adopted by more and more
        users. But the more users using the product, the more signals we started
        to receive that users were experiencing unintuitive behavior and missing
        functionality in the campaign editing workflow.
      </BodyTextWithMargin>
      <BodyTextWithMargin>
        At the time, there was no easy way for users to make changes to a
        campaign while there were recipients scheduled to receive touches. If a
        user needed to change the content of an email or change recipient
        details, they had no easy way of doing so. We needed to introduce the
        ability to make edits to an in-progress campaign and make it intuitive
        to do so.
      </BodyTextWithMargin>
    </ContentContainer>
  </FullWidthBackground>
)

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

export default TheProblem
