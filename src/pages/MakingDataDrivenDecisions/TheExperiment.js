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
import SectionDivider from "../../components/SectionDivider"

const GuidedSelling = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider color="white"> / the experiment</SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1030px" }}>
        <HeaderMdWithMargin>experiment objectives</HeaderMdWithMargin>
        <GridWithMargin>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock>
              <ColoredNumber color="pink">1 )</ColoredNumber>
              <NumberedBlockText>
                Discover what kind of data we can surface to users that will
                provide value and help them spend their time well
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock>
              <ColoredNumber color="pink">2 )</ColoredNumber>
              <NumberedBlockText>
                Understand what types of insights are most helpful for
                prioritizing a user’s time
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber color="pink">3 )</ColoredNumber>
              <NumberedBlockText>
                Broaden our understanding of what other types of pain points we
                can solve for users with the use of this data
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
        </GridWithMargin>
        <BodyTextWithMargin>
          For our first experiment, we wanted to leverage data that we already
          had access to. As we began recruiting for user research, we asked our
          tech lead to pull down real data for each user we would be talking to.
          Then, in the spirit of experimentation we simply put together several
          charts in Google Sheets to portray that data in a way that the user
          would easily be able to comprehend. We wanted to use real user data
          instead of showing designed mock-ups so that the reports would feel
          real to the users and they could get a true understanding of how this
          data may or may not provide value to them.
          <br />
          <br />
          We created three charts that surfaced, in a variety of ways, how users
          were spending their time. With these charts, we hoped to discover what
          information would most help users better prioritize their time.
        </BodyTextWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;
  margin-top: 24px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
    margin-top: 48px;
  `}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
  `}
`

const GridWithMargin = styled(Grid)`
  margin-top: 16px;

  ${breakpoint("tablet")`
    margin-top: 32px;
  `}
`

export default GuidedSelling
