import breakpoint from "styled-components-breakpoint"

import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import {
  BodyText,
  NumberedBlock,
  NumberedBlockText,
  ColoredNumber,
  HeaderMd,
} from "../../components/typography"

const GuidedSelling = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <HeaderMdWithMargin>guided selling</HeaderMdWithMargin>
        <BodyTextWithMargin>
          In research, we had been hearing consistently that one of the most
          common pain points for our target users was spending time on leads and
          opportunities that didn’t matter. “Guided Selling” to us, meant that
          our users would feel that Yesware was giving them the insights and the
          tools they needed to focus on the right opportunities and take the
          most appropriate actions at the right time. To kick off any
          experimentation around guided selling, we asked ourselves a number of
          questions:
        </BodyTextWithMargin>
        <GridWithMargin>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock>
              <ColoredNumber color="pink">1 )</ColoredNumber>
              <NumberedBlockText>
                How can we help our users spend more time on the most impactful
                and valuable customers, prospects, and opportunities?
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock>
              <ColoredNumber color="pink">2 )</ColoredNumber>
              <NumberedBlockText>
                Can we help users learn patterns of success from their own
                behaviors around their own content?
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock className="first-in-sub-block">
              <ColoredNumber color="pink">a )</ColoredNumber>
              <NumberedBlockText className="sub-block-text">

                Do we have the data to connect content back to outcomes? Do we
                have the data to show a connection between actions and
                outcomes?
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock className="sub-block">
              <ColoredNumber color="pink">b )</ColoredNumber>
              <NumberedBlockText>
                If not, do we have other options for providing more meaningful
                metrics than recipient engagement? (i.e. reply rates)
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber color="pink">3 )</ColoredNumber>
              <NumberedBlockText>
                If we can help users learn from their own behaviors and content,
                why not let them learn from the successful behaviors and content
                used by their teammates?
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber color="pink">4 )</ColoredNumber>
              <NumberedBlockText>
                What if we could surface non-obvious insights that could help
                users prioritize their customers?
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
        </GridWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 20px;
  `}
`

const GridWithMargin = styled(Grid)`
  margin-top: 16px;

  ${breakpoint("tablet")`
    margin-top: 32px;
  `}
`

export default GuidedSelling
