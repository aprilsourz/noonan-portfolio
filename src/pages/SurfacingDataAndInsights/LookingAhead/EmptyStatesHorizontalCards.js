import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../../../components/layout"
import { SmallGreyItalic } from "../../../components/typography"
import GenericCard from "../../../components/GenericCard"

import noActivityImg from "../../../img/surfacing-data/final-designs-images/06-data_nuances/05-no-activity.png"
import noEngagementImg from "../../../img/surfacing-data/final-designs-images/06-data_nuances/06-no-engagement.png"

const LookingAhead = () => (
  <ContentContainer style={{ maxWidth: "1025px" }}>
    <HorizontalCards>
      <HorizontalCard>
        <GreyHorizontalCardSection>
          <HorizontalCardImage src={noActivityImg} />
        </GreyHorizontalCardSection>
        <WhiteHorizontalCardSection>
          <SmallGreyItalic>
            No recipients engaged via this activity type
          </SmallGreyItalic>
        </WhiteHorizontalCardSection>
      </HorizontalCard>
      <HorizontalCard>
        <GreyHorizontalCardSection>
          <HorizontalCardImage src={noEngagementImg} />
        </GreyHorizontalCardSection>
        <WhiteHorizontalCardSection>
          <SmallGreyItalic>
            No content received this type of engagement
          </SmallGreyItalic>
        </WhiteHorizontalCardSection>
      </HorizontalCard>
    </HorizontalCards>
  </ContentContainer>
)

const WhiteHorizontalCardSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 7.5px;

  ${breakpoint("tablet")`
    padding: 20px 15px;
  `}
`

const GreyHorizontalCardSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 10px;

  ${breakpoint("tablet")`
    padding: 20px;
  `}
`

const HorizontalCardImage = styled.img`
  @media screen and (max-width: 1019px) {
    width: unset;
    height: unset;
    width: 100%;
    max-width: 456px;
    :last-of-type {
      margin-top: 20px;
    }
  }

  width: 456px;
  height: 60px;
`

const HorizontalCardContainer = styled(GenericCard)`
  @media screen and (max-width: 1019px) {
    width: unset;
    height: unset;
    width: 100%;
    max-width: 496px;
    :last-of-type {
      margin-top: 20px;
    }
  }

  width: 496px;
  height: 157px;
  margin: 0 2px;
`

const HorizontalCard = ({ children }) => {
  return <HorizontalCardContainer>{children}</HorizontalCardContainer>
}

const HorizontalCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}

  @media screen and (max-width: 1019px) {
    justify-content: space-around;
  }
`

export default LookingAhead
