import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BodyText, BoldBodyText } from "../../components/typography"
import GenericCard, { CardLabel } from "../../components/GenericCard"

const Charts = () => {
  return (
    <FullWidthBackground backgroundColor="whitePinkTint">
      <ContentContainer style={{ maxWidth: "1350px" }}>
        <ChartsContainer>
          <Chart />
          <Chart />
          <Chart />
        </ChartsContainer>
      </ContentContainer>
    </FullWidthBackground>
  )
}

const Chart = ({ label, header }) => (
  <Card>
    <CardHeader>
      <CardLabel>{label}</CardLabel>
      <ExtraBoldBodyText>{header}</ExtraBoldBodyText>
    </CardHeader>
  </Card>
)

const Card = styled(GenericCard)``

const CardHeader = styled.div`
  height: 127px;
  padding: 20px;
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
const ExtraBoldBodyText = styled(BoldBodyText)`
  font-weight: 900;
  margin-top: 20px;
`

export default Charts
