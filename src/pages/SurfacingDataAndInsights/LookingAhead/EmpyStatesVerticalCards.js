import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../../../components/layout"
import { SmallGreyItalic } from "../../../components/typography"
import GenericCard from "../../../components/GenericCard"

import noDataAvailableImg from "../../../img/surfacing-data-and-insights/final-designs-images/06-data_nuances/01-no-data-available.png"
import noChangeImage from "../../../img/surfacing-data-and-insights/final-designs-images/06-data_nuances/02-no-change.png"
import stat0Img from "../../../img/surfacing-data-and-insights/final-designs-images/06-data_nuances/03-stat-0.png"
import noDataComparisonImg from "../../../img/surfacing-data-and-insights/final-designs-images/06-data_nuances/04-no-data-comparison.png"

const EmptyStatesVerticalCards = () => (
  <ContentContainer style={{ maxWidth: "1130px" }}>
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
)

const WhiteVerticalCardSectionOneRow = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 15px;
`

const WhiteVerticalCardSectionTwoRow = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 12px 15px 11px;
`

const GreyVerticalCardSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 7.5px;
  padding: 20px 15px;
`

const VerticalCardImage = styled.img`
  max-width: 235px;
  max-height: 118px;
`

const VerticalCardContainer = styled(GenericCard)`
  width: 265px;
  height: 215px;
  margin: 0 2px;

  @media screen and (max-width: 557px) {
    :nth-of-type(2) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 826px) {
    :nth-of-type(3) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1095px) {
    :last-of-type {
      margin-top: 20px;
    }
  }
`

const VerticalCard = ({ children }) => {
  return <VerticalCardContainer>{children}</VerticalCardContainer>
}

const VerticalCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}

  @media screen and (max-width: 1095px) {
    justify-content: space-around;
  }
`

export default EmptyStatesVerticalCards
