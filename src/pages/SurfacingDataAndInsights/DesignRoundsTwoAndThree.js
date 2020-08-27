import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { HeaderSm, BodyText, BoldBodyText } from "../../components/typography"

import UxElements from "./DesignRoundsTwoAndThree/UxElements"

const DesignRoundsTwoAndThree = () => (
  <>
    <FullWidthBackground
      className="responsive-align-left"
      backgroundColor="white"
    >
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <GreenHeaderSm>DESIGN ROUNDS TWO & THREE</GreenHeaderSm>
        <BodyTextWithMargin25>
          For next rounds of design, I started narrowing down my options based
          on what was in scope for the initial release of the dashboard and
          feedback and critique from my design colleagues. Caro and I had also
          narrowed down the questions we wanted the dashboard to be able to
          answer which helped define what numbers we would be showing and types
          of data we would be displaying.
        </BodyTextWithMargin25>

        <BoldBodyTextWithMargin>
          Key questions the dashboard should answer for a user:
        </BoldBodyTextWithMargin>
        <ExampleContainer>
          <GreenExampleBox>
            <BoldBodyText style={{ fontWeight: "300" }}>
              “How am I performing?”
            </BoldBodyText>
          </GreenExampleBox>
          <GreenExampleBox>
            <BoldBodyText style={{ fontWeight: "300" }}>
              “What recipients are engaging?”
            </BoldBodyText>
          </GreenExampleBox>
          <GreenExampleBox>
            <BoldBodyText style={{ fontWeight: "300" }}>
              “What content is succeeding?”
            </BoldBodyText>
          </GreenExampleBox>
        </ExampleContainer>
        <BodyTextWithMargin45>
          We wanted users to be able to come to the dashboard and get immediate
          value by connecting data around content, recipient engagement, and
          their own personal performance. We felt that the dashboard should
          provide a snapshot understanding of the most important stats from key
          reports as well as insights into recipient engagement and content
          performance.
          <br />
          <br />
          During these two rounds, my designs went through a lot more iteration.
          I settled on a basic layout and continued to play with optionality
          around data display, various UI elements, and use of color and icons.
          While I knew that we wanted to release an MVP of the dashboard with a
          pulled back scope of work, I wanted to make sure I was considering the
          future of the dashboard and what it would look like if we added
          additional stats or insights. I worked through a variety of designs
          that explored not only UI options but additional data, graphs, and
          responsiveness based on data shown.
        </BodyTextWithMargin45>
      </ContentContainer>
    </FullWidthBackground>
    <UxElements />
  </>
)

const GreenHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.green};
`

const BodyTextWithMargin25 = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const BodyTextWithMargin45 = styled(BodyText)`
  margin-top: 22.5px;

  ${breakpoint("tablet")`
    margin-top: 45px;
  `}
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-top: 14px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const ExampleContainer = styled.div`
  margin-top: 12px;

  ${breakpoint("tablet")`
    padding: 0 20px;
    margin-top: 25px;
`}
`
const GreenExampleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.textGreen};
  padding: 20px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
      padding-left: 20px;
      padding-right: 50px;
  `}
`

export default DesignRoundsTwoAndThree
