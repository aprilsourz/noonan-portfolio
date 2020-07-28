import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { HeaderSm, BodyText, BoldBodyText } from "../../components/typography"

import { SmallerCharts } from "./Charts"
import ExperimentConclusions from "./ResearchAndKeyFindings/ExperimentConclusions"

const ResearchAndKeyFindings = () => (
  <FullWidthBackground
    className="responsive-align-left"
    backgroundColor="white"
  >
    <ContentContainer style={{ maxWidth: "1040px" }}>
      <PinkHeaderSm>RESEARCH & KEY FINDINGS</PinkHeaderSm>
      <BodyTextWithMargin>
        We talked to a total of 10 users - seven account executives, one sales
        manager, and two account managers. For each user, we showed them the
        three charts above with their own data.
      </BodyTextWithMargin>

      <BoldBodyTextWithMargin>
        Some of the key questions we asked were:
      </BoldBodyTextWithMargin>
      <ExampleContainer>
        <PinkExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “What data do users currently find valuable?”
          </BoldBodyText>
        </PinkExampleBox>
        <PinkExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “How do users currently prioritize which opportunities to spend time
            on?”
          </BoldBodyText>
        </PinkExampleBox>
        <PinkExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “Time vs. Opportunity - would users rather have us help them
            prioritize their time overall or prioritize who they are talking
            to?”
          </BoldBodyText>
        </PinkExampleBox>
        <PinkExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            “Between the two time-based reports, which one would change a user’s
            behavior?”
          </BoldBodyText>
        </PinkExampleBox>
      </ExampleContainer>
      <BoldBodyTextWithMargin>
        Our most important findings:
      </BoldBodyTextWithMargin>
      <ExampleContainer>
        <PinkExampleBox>
          <BoldBodyText>Data users currently find valuable:</BoldBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Recipient-related data (history with recipients - communication,
                notes, personal details, etc.)
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Engagement data (knowing when a recipient is engaging with an
                email can drive specific timing and follow-up on the user’s
                part)
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Reporting statistics (knowing a recipient’s send, open, and
                reply rates can improve content and understanding of what’s
                working or not).
              </li>
            </ul>
          </ItalicBodyText>
        </PinkExampleBox>
        <PinkExampleBox>
          <BoldBodyText>Users currently prioritize by:</BoldBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Users conflate prioritizing their time with prioritizing their
                opportunities
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Users prioritize opportunities by size and monetary value and
                then by what stage an opportunity is at and whether it’s likely
                to close in the current quarter
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Users spend, on average, 35% of their time on opportunities that
                do NOT lead to success
              </li>
            </ul>
          </ItalicBodyText>
        </PinkExampleBox>
        <PinkExampleBox>
          <BoldBodyText style={{ fontWeight: "300" }}>
            Reactions to data and charts shown:
          </BoldBodyText>
        </PinkExampleBox>
        <SmallerCharts />
      </ExampleContainer>
    </ContentContainer>
    <ExperimentConclusions />
  </FullWidthBackground>
)

const PinkHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.pink};
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-top: 14px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const ItalicBodyText = styled(BodyText)`
  font-style: italic;
  margin-top: 10px;
  margin-left: 20px;
  font-weight: 300;

  ${breakpoint("tablet")`
    margin-top: 20px;
  `};
`

const ExampleContainer = styled.div`
  margin-top: 12px;

  ${breakpoint("tablet")`
    padding: 0 20px;
    margin-top: 25px;
`}
`
const PinkExampleBox = styled.div`
  background-color: rgba(255, 233, 253, 0.5);
  color: ${({ theme }) => theme.colors.textPink};
  padding: 20px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
      padding-left: 20px;
      padding-right: 50px;
  `}
`

export default ResearchAndKeyFindings
