import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { TextContainer, FullWidthBackground } from "../../components/layout"

import workflowUpdateRecipient from "../../img/workflowUpdateRecipient.png"
import workflowEditTouch from "../../img/workflowEditTouch.png"
import allCampaignsAugustOutreach from "../../img/allCampaignsAugustOutreach.png"
import allCampaignsAnnAndersonDetails from "../../img/allCampaignsAnnAndersonDetails.png"
import allCampaignsPartial from "../../img/allCampaignsPartial.png"

const Workflows = () => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor="lightGrey"
  >
    <WorkFlowContainer>
      <Img src={workflowUpdateRecipient} style={{ maxWidth: "630px" }} />
      <Img src={workflowEditTouch} style={{ maxWidth: "630px" }} />
    </WorkFlowContainer>
    {/* <ImagesRowOne>
      <Img src={allCampaignsAugustOutreach} style={{ maxWidth: "630px" }}/>
      <Img src={allCampaignsAnnAndersonDetails} style={{ maxWidth: "630px" }}/>
      <Img src={allCampaignsPartial} style={{ maxWidth: "85px" }}/>
    </ImagesRowOne> */}
  </FullWidthBackground>
)

export default Workflows

const Img = styled.img`
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

const ImagesRowOne = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: auto;
  margin-top: 55px;
  flex-wrap: wrap;
`
