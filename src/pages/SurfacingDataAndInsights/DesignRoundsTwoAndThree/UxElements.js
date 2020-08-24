import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"
import "@brainhubeu/react-carousel/lib/style.css"

import Carousel from "../../../components/Carousel"
import {
  ContentContainer,
  FullWidthBackground,
} from "../../../components/layout"
import { BoldBodyText } from "../../../components/typography"

import optionA from "../../../img/surfacing-data/04-interface-options-carousel/option-a.png"
import optionB from "../../../img/surfacing-data/04-interface-options-carousel/option-b.png"
import optionC from "../../../img/surfacing-data/04-interface-options-carousel/option-c.png"
import optionD from "../../../img/surfacing-data/04-interface-options-carousel/option-d.png"
import optionE from "../../../img/surfacing-data/04-interface-options-carousel/option-e.png"
import optionF from "../../../img/surfacing-data/04-interface-options-carousel/option-f.png"
import optionG from "../../../img/surfacing-data/04-interface-options-carousel/option-g.png"
import optionH from "../../../img/surfacing-data/04-interface-options-carousel/option-h.png"

import possibleLayout1 from "../../../img/surfacing-data/05-progression-carousel/progression-carousel1.png"
import possibleLayout2 from "../../../img/surfacing-data/05-progression-carousel/progression-carousel2.png"
import possibleLayout3 from "../../../img/surfacing-data/05-progression-carousel/progression-carousel3.png"
import possibleLayout4 from "../../../img/surfacing-data/05-progression-carousel/progression-carousel4.png"

const UxElements = () => (
  <>
    <FullWidthBackground backgroundColor="lightGreen">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BoldBodyText>Information and interface variations:</BoldBodyText>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1140px" }}>
        <FirstCarouselContainer>
          <Carousel infinite slidesPerScroll={1} slidesPerPage={1}>
            <img src={optionA} alt="" />
            <img src={optionB} alt="" />
            <img src={optionC} alt="" />
            <img src={optionD} alt="" />
            <img src={optionE} alt="" />
            <img src={optionF} alt="" />
            <img src={optionG} alt="" />
            <img src={optionH} alt="" />
          </Carousel>
        </FirstCarouselContainer>
      </ContentContainer>
    </FullWidthBackground>
    <Divider />
    <FullWidthBackground backgroundColor="lightGreen">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BoldBodyText>
          Possible options for layout now and in the future:
        </BoldBodyText>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "750px" }}>
        <SecondCarouselContainer>
          <Carousel infinite slidesPerScroll={1} slidesPerPage={1}>
            <img src={possibleLayout1} alt="" />
            <img src={possibleLayout2} alt="" />
            <img src={possibleLayout3} alt="" />
            <img src={possibleLayout4} alt="" />
          </Carousel>
        </SecondCarouselContainer>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const FirstCarouselContainer = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  margin-top: 5px;

  ${breakpoint("tablet")`
    margin-top: 10px
  `}
`

const SecondCarouselContainer = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 15px
  `}
`

const Divider = styled.div`
  width: 100%;
  height: 30px;

  ${breakpoint("tablet")`
     height: 60px;
  `}
`

export default UxElements
