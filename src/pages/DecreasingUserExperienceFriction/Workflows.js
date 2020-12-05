import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { FullWidthBackground, ContentContainer } from "../../components/layout"

import workflowUpdateRecipient from "../../img/decreasing-user-friction/decreasing-user-friction-workflow1.png"
import workflowEditTouch from "../../img/decreasing-user-friction/decreasing-user-friction-workflow2.png"

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
  margin: 0 auto;
  max-width: 1320px;
  text-align: center;
  width: fit-content;

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
