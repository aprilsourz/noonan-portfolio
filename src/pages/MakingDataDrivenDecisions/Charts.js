import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BoldBodyText, BodyText } from "../../components/typography"
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
    <ChartImg src={img} alt="" />
  </Card>
)

export const SmallerCharts = () => {
  return (
    <SmallerChartsContainer style={{ marginTop: "10px" }}>
      <SmallerChart
        content={<SpentPerActivityContent />}
        label="CHART ONE"
        header="TIME SPENT PER ACTIVITY"
      />
      <SmallerChart
        content={<ActivityAcrossAccountsContent />}
        label="CHART TWO"
        header="ACTIVITY ACROSS ACCOUNTS"
      />
      <SmallerChart
        content={<TimeSpentOnAccounts />}
        label="CHART THREE"
        header="TIME SPENT ON ACCOUNTS BY ACTIVITY"
      />
    </SmallerChartsContainer>
  )
}

const SmallerChart = ({ content, label, header }) => {
  return (
    <SmallerCard>
      <SmallerCardHeader>
        <CardLabel>{label}</CardLabel>
        <ExtraBoldBodyText>{header}</ExtraBoldBodyText>
      </SmallerCardHeader>
      {content}
    </SmallerCard>
  )
}

const SpentPerActivityContent = () => (
  <>
    <Padding20px>
      <SmallBodyText>
        7/10 users said this report would encourage them to use their time more
        wisely (i.e. sending emails via Templates instead of individually
        writing every email sent).
        <br />
        <br />
        <strong style={{ fontStyle: "italic", fontWeight: 300 }}>But</strong>,
        users also indicated they desired a way to take action from these
        insights.
      </SmallBodyText>
    </Padding20px>
    <SmallerChartImgContainer>
      <SmallerChartImg src={timeChart} />
    </SmallerChartImgContainer>
  </>
)

const ActivityAcrossAccountsContent = () => (
  <>
    <Padding20px>
      <SmallBodyText>
        6/10 users found this report to be valuable in a few ways - time saving,
        keeping things from falling through the cracks, helping prioritize,
        understanding what’s working and what’s not, and what ratios lead to
        success.
        <br />
        <br />
      </SmallBodyText>
    </Padding20px>
    <SmallerChartImgContainer>
      <SmallerChartImg src={activityChart} />
    </SmallerChartImgContainer>
  </>
)

const TimeSpentOnAccounts = () => (
  <>
    <Padding20px>
      <SmallBodyText>
        5/10 users found this report to be very valuable for similar use cases
        as the previous chart - understanding what's working and what's not, what
        ratios lead to success, prioritization, and seeing if the time spent is
        matching up with the results.
        <br />
        <br />
      </SmallBodyText>
    </Padding20px>
    <SmallerChartImgContainer>
      <SmallerChartImg src={activityChart} />
    </SmallerChartImgContainer>
  </>
)

const Padding20px = styled.div`
  padding: 20px;
`

const SmallBodyText = styled(BodyText)`
  ${breakpoint("tablet")`
    font-size: 16px
  `}
`

const ChartImg = styled.img`
  width: 100%;
`

const SmallerChartImg = styled.img`
  width: 100%;
`

const SmallerChartImgContainer = styled.div`
  max-width: 279px;
  width: 100%;
  margin: 0 auto;
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

const SmallerCard = styled(GenericCard)`
  max-width: 320px;
  width: 320px;
  height: 485px;
  overflow: hidden;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  @media screen and (min-width: 660px) {
    &:last-of-type {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 1020px) {
    &:last-of-type {
      margin-top: 0;
    }

    &:not(:first-of-type) {
      margin-top: 0;
    }
  }
`

const SmallerCardHeader = styled.div`
  padding: 20px;
  border-bottom: 2px solid #d7dbde;
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

const SmallerChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (min-width: 1020px) {
    justify-content: space-between;
  }
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
