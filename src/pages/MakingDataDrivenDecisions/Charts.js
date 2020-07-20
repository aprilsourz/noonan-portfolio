import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BoldBodyText } from "../../components/typography"
import GenericCard, { CardLabel } from "../../components/GenericCard"

import timeChart from "../../img/chart-time.png"
import activityChart from "../../img/chart-activity.png"
import timeActivityChart from "../../img/chart-time-activity.png"

const Charts = () => {
  return (
    <FullWidthBackground backgroundColor="whitePinkTint">
      <ContentContainer style={{ maxWidth: "1350px" }}>
        <ChartsContainer>
          <Chart
            img={timeChart}
            label="CHART ONE"
            header="TIME SPENT PER ACTIVITY"
          />
          <Chart
            img={activityChart}
            label="CHART TWO"
            header="ACTIVITY ACROSS ACCOUNTS"
          />
          <Chart
            img={timeActivityChart}
            label="CHART THREE"
            header="TIME SPENT ON ACCOUNTS BY ACTIVITY"
          />
        </ChartsContainer>
      </ContentContainer>
    </FullWidthBackground>
  )
}

const Chart = ({ label, header, img }) => (
  <Card>
    <CardHeader>
      <CardLabel>{label}</CardLabel>
      <ExtraBoldBodyText>{header}</ExtraBoldBodyText>
    </CardHeader>
    <Img src={img} alt="" />
  </Card>
)

const Img = styled.img`
  width: 100%;
`

const Card = styled(GenericCard)`
  max-width: 435px;
  margin: 0 auto;
  width: 100%;
  &:not(:first-of-type) {
    margin-top: 20px;
  }
  ${breakpoint("tablet")`
    width: 33%;
    margin: 0;

    &:not(:first-of-type) {
      margin-top: 0;
    }
  `}
`

const CardHeader = styled.div`
  padding: 20px;
  border-bottom: 2px solid #d7dbde;
  height: 115px;

  ${breakpoint("tablet")`
    height: 127px;
  `}
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`
const ExtraBoldBodyText = styled(BoldBodyText)`
  font-weight: 900;
  margin-top: 20px;

  @media screen and (min-width: 737px) {
    font-size: 16px;
  }

  @media screen and (min-width: 820px) {
    font-size: 18px;
  }

  @media screen and (min-width: 930px) {
    font-size: 20px;
  }
`

export default Charts
