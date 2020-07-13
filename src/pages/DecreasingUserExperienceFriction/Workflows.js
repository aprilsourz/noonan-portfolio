import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { FullWidthBackground, ContentContainer } from "../../components/layout"

import workflowUpdateRecipient from "../../img/decreasing-user-friction_workflow1.png"
import workflowEditTouch from "../../img/decreasing-user-friction_workflow2.png"

const Workflows = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="lightGrey"
  >
    <ContentContainer style={{ maxWidth: "1320px" }}>
      <WorkFlowContainer>
        <img
          src={workflowUpdateRecipient}
          style={{ maxWidth: "630px" }}
          alt=""
        />
        <img src={workflowEditTouch} style={{ maxWidth: "630px" }} alt="" />
      </WorkFlowContainer>
    </ContentContainer>
  </FullWidthBackground>
)

export default Workflows

const WorkFlowContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: 100%;
  }

  img:not(:first-of-type) {
    margin-top: 10px;
  }

  ${breakpoint("tablet")`
    img {
      width: unset

    }
  `}

  @media (min-width: 1260px) {
    justify-content: space-between;

    img:not(:first-of-type) {
      margin-top: 0;
    }
  }
`
