import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"

import sketchImage01 from "../../img/surfacing-data/02-original-sketches-images/sketch-1.png"
import sketchImage02 from "../../img/surfacing-data/02-original-sketches-images/sketch-2.png"
import sketchImage03 from "../../img/surfacing-data/02-original-sketches-images/sketch-3.png"

const Sketches = () => {
  return (
    <FullWidthBackground backgroundColor="lightGreen">
      <ContentContainer style={{ maxWidth: "1140px" }}>
        <PicturesContainer>
          <ImgContainer className="left">
            <Img src={sketchImage01} />
          </ImgContainer>
          <ImgContainer className="center">
            <Img src={sketchImage02} />
          </ImgContainer>
          <ImgContainer className="right">
            <Img src={sketchImage03} />
          </ImgContainer>
        </PicturesContainer>
      </ContentContainer>
    </FullWidthBackground>
  )
}

const ImgContainer = styled.div`
  overflow: hidden;
  max-width: 350px;
  max-height: 262px;
  margin: 30px auto 0;
  width: 100%;

  ${breakpoint("tablet")`
    margin: 0;
    width: 32%;
  `}
`

const Img = styled.img`
  max-width: 350px;
  display: flex;
  width: 100%;
`

const PicturesContainer = styled.div`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`

export default Sketches
