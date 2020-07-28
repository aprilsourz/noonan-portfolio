import breakpoint from "styled-components-breakpoint"

import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import {
  BodyText,
  BoldBodyText,
  NumberedBlock,
  NumberedBlockText,
  ColoredNumber,
  HeaderSm,
} from "../../components/typography"

import decreasingUserFrictionIterate from "../../img/decreasing-user-friction_iterate.png"

const ResearchRoundTwo = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BlueHeaderSm>RESEARCH ROUND TWO</BlueHeaderSm>
        <BodyTextWithMargin>
          To validate the new designs, Jamie and I conducted usability testing.
          The script again asked users to complete specific tasks within the
          workflows with the goal of assessing whether the changes improved the
          user's understanding of which mode they were in and what actions they
          could or could not take in that mode. We conducted 8 interviews during
          which, we kept track of how often users successfully completed their
          tasks, asked for feedback on the new functionality and workflows, and
          gathered insights into whether the new Ul updates had helped simplify
          and clarify user understanding.
        </BodyTextWithMargin>
        <BoldBodyTextWithMargin>
          Our key findings and results:
        </BoldBodyTextWithMargin>
        <GridWithMargin>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock>
              <ColoredNumber>1 )</ColoredNumber>
              <NumberedBlockText>
                The new workflows were well received and highly rated. Users
                felt that the new Ul and interactions of how to make edits in
                different modes were clear and intuitive.
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock>
              <ColoredNumber>2 )</ColoredNumber>
              <NumberedBlockText>
                Users felt that the new Ul allowing them to edit one touch at a
                time in a focused Ul gave them more confidence and less anxiety
                about accidentally making a change in the wrong place.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber>3 )</ColoredNumber>
              <NumberedBlockText>
                Overall, users rated the new functionality very highly and found
                it very valuable, although several users were not quite sure how
                to initially navigate to the new page.
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber>4 )</ColoredNumber>
              <NumberedBlockText>
                In terms of different ways to edit a campaign touch, users'
                expectations were now more closely aligned with the actual
                behavior of the feature. And based on specific feedback from
                this round of research, we were able to make further iterations
                to several pieces of the editing workflow that would smooth out
                any kinks.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
        </GridWithMargin>
        <WrapUpText>
          After wrapping up the research, I created final high fidelity mockups
          in Sketch that iterated and addressed key points of feedback we had
          received. I transitioned these mockups to lnVision and linked them
          together as a prototype and worked with engineering to spec out the
          new workflows, functionality, and Ul elements.
        </WrapUpText>
      </ContentContainer>
    </FullWidthBackground>
    <FullWidthBackground backgroundColor="lightGrey">
      <ImgContainer>
        <img
          style={{ width: "100%" }}
          src={decreasingUserFrictionIterate}
          alt=""
        />
      </ImgContainer>
    </FullWidthBackground>
  </>
)

const ImgContainer = styled(ContentContainer)`
  padding: 10px 10px;
  max-width: 1220px;
`

const BlueHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.blue};
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-top: 20px;

  ${breakpoint("tablet")`
    margin-top: 40px;
  `}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 20px;

  ${breakpoint("tablet")`
    margin-top: 40px;
  `}
`

const GridWithMargin = styled(Grid)`
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

const WrapUpText = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
  `}
`

export default ResearchRoundTwo
