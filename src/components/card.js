import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { HeaderSm } from "../components/typography"

export const Card = styled.div`
  background-color: white;
  border: 1px solid #e4e6eb;
  -webkit-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  -moz-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  box-shadow: 1px 1px 5px 0px rgba(204, 204, 204, 1);

  max-width: 325px;
  width: 325px;
  height: 500px;
  padding: 25px 20px 20px 20px;
`

export const ScenarioCard = () => {
  return (
    <Card>
      <CardLabel>SCENARIO ONE</CardLabel>
      <CardHeaderSm>UPDATE RECIPIENT DATA IN YESWARE</CardHeaderSm>
    </Card>
  )
}

const CardHeaderSm = styled(HeaderSm)`
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

const CardLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;

  ${breakpoint("tablet")`
    font-size: 16px;
  `}
`
