import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Divider from "./Divider"
import { HeaderSm, BodyText } from "./typography"
import GenericCard, { CardLabel } from "./GenericCard"

const ScenarioCard = ({ label, title, subtitle, body }) => {
  return (
    <Card>
      <CardContent>
        <CardLabel>{label}</CardLabel>
        <CardHeaderSm>{title}</CardHeaderSm>
        <Subtitle>{subtitle}</Subtitle>
      </CardContent>
      <Divider />
      <CardContent>{body}</CardContent>
    </Card>
  )
}

const Card = styled(GenericCard)`
  background-color: white;
  border: 1px solid #e4e6eb;
  -webkit-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  -moz-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  box-shadow: 1px 1px 5px 0px rgba(204, 204, 204, 1);
  max-width: 325px;
  width: 325px;
  height: auto;
  margin-bottom: 10px;

  ${breakpoint("tablet")`
    height: 500px;
  `};
`

const CardContent = styled.div`
  padding: 25px 20px 20px 20px;
`
const CardHeaderSm = styled(HeaderSm)`
  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

const Subtitle = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
  margin-top: 20px;
`}
`
export default ScenarioCard
