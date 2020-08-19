import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"
import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import {
  ContentContainer,
  FullWidthBackground,
} from "../../../components/layout"
import {
  HeaderSm,
  BodyText,
  BoldBodyText,
} from "../../../components/typography"

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
        <CarouselContainer>
          <Carousel
            infinite
            // value={this.state.value}
            // onChange={this.onChange}
            arrows
            slidesPerScroll={1}
            slidesPerPage={1}
            breakpoints={{
              737: {
                arrows: false,
                slidesPerScroll: 1,
                slidesPerPage: 1,
              },
            }}
          >
            <img src={optionA} alt="" />
            <img src={optionB} alt="" />
            <img src={optionC} alt="" />
            <img src={optionD} alt="" />
            <img src={optionE} alt="" />
            <img src={optionF} alt="" />
            <img src={optionG} alt="" />
            <img src={optionH} alt="" />
          </Carousel>
        </CarouselContainer>
      </ContentContainer>
    </FullWidthBackground>
    <Divider />
    <FullWidthBackground backgroundColor="lightGreen">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BoldBodyText>
          Possible options for layout now and in the future:
        </BoldBodyText>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "750px", marginTop: "-75px" }}>
        <CarouselContainer>
          <Carousel
            infinite
            // value={this.state.value}
            // onChange={this.onChange}
            arrows
            slidesPerScroll={1}
            slidesPerPage={1}
            breakpoints={{
              737: {
                arrows: false,
                slidesPerScroll: 1,
                slidesPerPage: 1,
              },
            }}
          >
            <img src={possibleLayout1} alt="" />
            <img src={possibleLayout2} alt="" />
            <img src={possibleLayout3} alt="" />
            <img src={possibleLayout4} alt="" />
          </Carousel>
        </CarouselContainer>
      </ContentContainer>
    </FullWidthBackground>
  </>
)


const CarouselContainer = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  margin-top: 5px;

  ${breakpoint("tablet")`
    margin-top: 10px
  `}
`

const Divider = styled.div`
  width: 100%;
  height: 60px;
`

export default UxElements
