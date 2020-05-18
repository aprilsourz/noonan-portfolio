import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import Divider from "../components/Divider"
import { HeaderSm, BodyText } from "../components/typography"

export const ScenarioCard = () => {
  return (
    <Card>
      <CardContent>
        <CardLabel>SCENARIO ONE</CardLabel>
        <CardHeaderSm>UPDATE RECIPIENT DATA IN YESWARE</CardHeaderSm>
        <CardLabelBodyText>
          A user starts a campaign, then needs to edit some of the recipient’s
          data
        </CardLabelBodyText>
      </CardContent>
      <Divider />
      <CardContent>
        <CardBodyText>
          <span style={{ fontWeight: "500" }}>Outcome:</span> the user needs a
          UI where they can edit the recipient’s name, email address, or other
          specified data
        </CardBodyText>
        <CardBodyText>
          <span style={{ fontWeight: "500" }}>Secondary Outcome:</span> the user
          should be able to re-preview the pending touches for that recipient
        </CardBodyText>
        <CardBodyText>
          <span style={{ fontWeight: "500" }}>Tertiary Outcome:</span> the user
          should know if an imminently sending touch will pull in the new data
          or not
        </CardBodyText>
      </CardContent>
    </Card>
  )
}

const Card = styled.div`
  background-color: white;
  border: 1px solid #e4e6eb;
  -webkit-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  -moz-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  box-shadow: 1px 1px 5px 0px rgba(204, 204, 204, 1);
  max-width: 325px;
  width: 325px;
  height: 500px;

  ${breakpoint("tablet")`
    height: auto;
  `}
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

const CardLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;

  ${breakpoint("tablet")`
    font-size: 16px;
  `}
`

const CardBodyText = styled(BodyText)`
  font-size: 12px;
  line-height: 20px;

  &:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
    font-size: 16px;
    line-height: 20px;
    &:not(:first-of-type) {
    margin-top: 20px;
  }
  `}
`

const CardLabelBodyText = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
  margin-top: 20px;
`}
`
