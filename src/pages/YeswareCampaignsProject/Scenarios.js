import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import { BodyText } from "../../components/typography"
import ScenarioCard from "../../components/ScenarioCard"

const Scenarios = () => {
  return (
    <ScenarioContainer>
      <ScenarioCard
        label="SCENARIO ONE"
        title="UPDATE RECIPIENT DATA IN YESWARE"
        subtitle="A user starts a campaign, then
        needs to edit some of the
        recipient’s data"
        body={<ScenarioOneContent />}
      />
      <ScenarioCard
        label="SCENARIO TWO"
        title="EDITING A TOUCH WITH IN-FLIGHT RECIPIENTS"
        subtitle="A user starts a campaign, then
        fixes a typo in Touch 1"
        body={<ScenarioTwoContent />}
      />
      <ScenarioCard
        label="SCENARIO THREE"
        title="CUSTOMIZE A SCHEDULED TOUCH FOR A SPECIFIC RECIPIENT"
        subtitle="A user starts a campaign, then wants to make recipient
        customizations"
        body={<ScenarioThreeContent />}
      />
      <ScenarioCard
        label="SCENARIO FOUR"
        title="ADD TOUCHES TO A SCHEDULED CAMPAIGN"
        subtitle="A group of recipients completes a campaign, the
        user wants to follow up with recipients who have engaged
        but not responded"
        body={<ScenarioFourContent />}
      />
    </ScenarioContainer>
  )
}

const ScenarioOneContent = () => (
  <>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Outcome:</span> the user needs a UI
      where they can edit the recipient’s name, email address, or other
      specified data
    </ScenariosOutcomeText>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Secondary Outcome:</span> the user
      should be able to re-preview the pending touches for that recipient
    </ScenariosOutcomeText>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Tertiary Outcome:</span> the user
      should know if an imminently sending touch will pull in the new data or
      not
    </ScenariosOutcomeText>
  </>
)

const ScenarioTwoContent = () => (
  <>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Outcome:</span> the user needs a
      visual indication that changes to the touch will be shown to all current
      and future recipients, except:
    </ScenariosOutcomeText>
    <ScenariosOutcomeText style={{ marginLeft: "19px" }}>
      <ul style={{ listStyle: "unset" }}>
        <li>
          Those who are scheduled to be sent that touch within the next five
          minutes
        </li>
      </ul>
    </ScenariosOutcomeText>
    <ScenariosOutcomeText style={{ marginLeft: "19px" }}>
      <ul style={{ listStyle: "unset" }}>
        <li>
          Those with customized messaging (either at the cohort or prospect
          level)
        </li>
      </ul>
    </ScenariosOutcomeText>
  </>
)

const ScenarioThreeContent = () => (
  <>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Outcome:</span> the user needs a UI
      where they can make edits for recipients with specific scheduled touches
    </ScenariosOutcomeText>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Secondary Outcome:</span> the user
      needs to know whether the recipient will receive the customization (i.e.
      the recipient will not see the changes if they are made too close to the
      scheduled send time)
    </ScenariosOutcomeText>
  </>
)

const ScenarioFourContent = () => (
  <>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Outcome:</span> the user needs a UI
      where they can quickly and easily add a touch (or touches), and select
      users who should receive the new touches
    </ScenariosOutcomeText>
    <ScenariosOutcomeText>
      <span style={{ fontWeight: "500" }}>Secondary Outcome:</span> if the
      campaign is shared, the user needs to know if the new touches will be
      shared with others using the campaign
    </ScenariosOutcomeText>
  </>
)

const ScenarioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 1315px) {
    justify-content: space-between;
  }
`

const ScenariosOutcomeText = styled(BodyText)`
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

export default Scenarios
