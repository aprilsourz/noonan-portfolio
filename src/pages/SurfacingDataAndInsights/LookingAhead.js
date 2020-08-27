import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import {
  BodyText,
  HeaderSm,
  SmallGreyItalic,
} from "../../components/typography"
import SectionDivider from "../../components/SectionDivider"
import GenericCard from "../../components/GenericCard"

import noDataAvailableImg from "../../img/surfacing-data/final-designs-images/06-data_nuances/01-no-data-available.png"
import noChangeImage from "../../img/surfacing-data/final-designs-images/06-data_nuances/02-no-change.png"
import stat0Img from "../../img/surfacing-data/final-designs-images/06-data_nuances/03-stat-0.png"
import noDataComparisonImg from "../../img/surfacing-data/final-designs-images/06-data_nuances/04-no-data-comparison.png"
import noActivityImg from "../../img/surfacing-data/final-designs-images/06-data_nuances/05-no-activity.png"
import noEngagementImg from "../../img/surfacing-data/final-designs-images/06-data_nuances/06-no-engagement.png"

const LookingAhead = () => (
  <>
    <FullWidthBackground>
      <ContentContainer>
        <SectionDivider bgColor="green" color="white">
          / final designs and looking ahead
        </SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyTextMargin60>
          In order to finalize the user interface I started to consider what
          interactions might be needed, how the dashboard could be responsive,
          and what different “empty”, “loading”, and nuanced states each card
          might end up in. I worked with one of our engineers to build out a
          spreadsheet that accounted for all the different states a card could
          get into based on what data might or might not be available to the
          user. While working through the final user interface and experience, I
          also synced with our internal sales team who we often gather internal
          user feedback from. By asking a series of questions and showing the
          designs, we validated that we had chosen the most relevant and
          valuable insights from each report to display at the dashboard level.
        </BodyTextMargin60>
        <GreenHeaderSm>DATA NUANCES</GreenHeaderSm>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1105px" }}>
        <VerticalCards>
          <VerticalCard>
            <GreyVerticalCardSection>
              <VerticalCardImage src={noDataAvailableImg} />
            </GreyVerticalCardSection>
            <WhiteVerticalCardSectionOneRow>
              <SmallGreyItalic>No data available</SmallGreyItalic>
            </WhiteVerticalCardSectionOneRow>
          </VerticalCard>
          <VerticalCard>
            <GreyVerticalCardSection>
              <VerticalCardImage src={noChangeImage} />
            </GreyVerticalCardSection>
            <WhiteVerticalCardSectionTwoRow>
              <SmallGreyItalic>
                No change in the data from last week to this week
              </SmallGreyItalic>
            </WhiteVerticalCardSectionTwoRow>
          </VerticalCard>
          <VerticalCard>
            <GreyVerticalCardSection>
              <VerticalCardImage src={stat0Img} />
            </GreyVerticalCardSection>
            <WhiteVerticalCardSectionTwoRow>
              <SmallGreyItalic>
                The stat is 0 (i.e. links were tracked, but no clicks occurred)
              </SmallGreyItalic>
            </WhiteVerticalCardSectionTwoRow>
          </VerticalCard>
          <VerticalCard>
            <GreyVerticalCardSection>
              <VerticalCardImage src={noDataComparisonImg} />
            </GreyVerticalCardSection>
            <WhiteVerticalCardSectionTwoRow>
              <SmallGreyItalic>
                No data from last week to compare to
              </SmallGreyItalic>
            </WhiteVerticalCardSectionTwoRow>
          </VerticalCard>
        </VerticalCards>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const BodyTextMargin60 = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
`}
`

const GreenHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.green};

  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

const WhiteVerticalCardSectionOneRow = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 7.5px;

  ${breakpoint("tablet")`
    padding: 20px 15px;
  `}
`

const WhiteVerticalCardSectionTwoRow = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 7.5px 0;

  ${breakpoint("tablet")`
    padding: 12px 15px 11px;
  `}
`

const GreyVerticalCardSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 7.5px;

  ${breakpoint("tablet")`
    padding: 20px 15px;
  `}
`

const VerticalCardImage = styled.img`
  max-width: 235px;
  max-height: 118px;
`

const VerticalCardContainer = styled(GenericCard)`
  width: 24%;
  max-width: 264px;
  height: 215px;

  ${breakpoint("desktop")`
    width: 24%;
    max-width: 264px;
    height: 215px;
  `}
`

const VerticalCard = ({ img, text, children }) => {
  return <VerticalCardContainer>{children}</VerticalCardContainer>
}

const VerticalCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

export default LookingAhead
