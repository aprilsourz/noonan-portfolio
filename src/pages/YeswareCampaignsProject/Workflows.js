import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { TextContainer, FullWidthBackground } from "../../components/layout"

import workflowUpdateRecipient from "../../img/workflowUpdateRecipient.png"
import workflowEditTouch from "../../img/workflowEditTouch.png"

const Workflows = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="lightGrey"
  >
    <WorkFlowContainer>
      <Img src={workflowUpdateRecipient} />
      <Img src={workflowEditTouch} />
    </WorkFlowContainer>
  </FullWidthBackground>
)

export default Workflows

const Img = styled.img`
  max-width: 630px;
  /* border: 1px solid #e4e6eb; */
  -webkit-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  -moz-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  box-shadow: 1px 1px 5px 0px rgba(204, 204, 204, 1);
`

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

const FixedWidthImgContainer = styled.div`
  max-width: 1410px;
  display: flex;
  flex-direction: row;
`
