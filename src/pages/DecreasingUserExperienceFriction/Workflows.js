import React from "react"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { FullWidthBackground, ContentContainer } from "../../components/layout"

import workflowUpdateRecipient from "../../img/decreasing-user-friction_workflow1.png"
import workflowEditTouch from "../../img/decreasing-user-friction_workflow2.png"
import carouselImageOne from "../../img/decreasing-user-friction_carousel1.png"
import carouselImageTwo from "../../img/decreasing-user-friction_carousel2.png"
import carouselImageThree from "../../img/decreasing-user-friction_carousel3.png"
import carouselImageFour from "../../img/decreasing-user-friction_carousel4.png"
import carouselImageFive from "../../img/decreasing-user-friction_carousel5.png"

import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

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

      <CarouselContainer>
        <Carousel
          infinite
          arrows
          dots
          slidesPerScroll={2}
          slidesPerPage={2}
          breakpoints={{
            737: {
              arrows: false,
              slidesPerScroll: 1,
              slidesPerPage: 1,
            },
          }}
        >
          <img src={carouselImageOne} alt="" />
          <img src={carouselImageTwo} alt="" />
          <img src={carouselImageThree} alt="" />
          <img src={carouselImageFour} alt="" />
          <img src={carouselImageFive} alt="" />
        </Carousel>
      </CarouselContainer>
    </ContentContainer>
  </FullWidthBackground>
)

export default Workflows

const CarouselContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;

  ${breakpoint("tablet")`
    margin-top: 75px;
  `}
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
