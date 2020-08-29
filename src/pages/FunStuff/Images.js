import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer } from "../../components/layout"

import feelings from "../../img/fun-stuff/01-feelings.png"
import plants from "../../img/fun-stuff/02-plants.png"
import climbing from "../../img/fun-stuff/03-climbing1.png"
import embroidery from "../../img/fun-stuff/04-embroidery.png"
import tatum from "../../img/fun-stuff/05-tatum.png"
import eggs from "../../img/fun-stuff/06-eggs.png"
import mothmoon from "../../img/fun-stuff/07-mothmoon.png"
import snowboarding from "../../img/fun-stuff/08-snowboarding.png"
import watercolor from "../../img/fun-stuff/09-watercolor.png"
import collagequeen from "../../img/fun-stuff/10-collagequeen.png"
import butterflies from "../../img/fun-stuff/11-butterflies.png"
import climbing2 from "../../img/fun-stuff/12-climbing2.png"
import backcountry from "../../img/fun-stuff/13-backcountry.png"
import weaving from "../../img/fun-stuff/14-weaving.png"
import popsicle from "../../img/fun-stuff/15-popsicle.png"
import quilt from "../../img/fun-stuff/16-quilt.png"
import biking from "../../img/fun-stuff/17-biking.png"
import collagelady from "../../img/fun-stuff/18-collagelady.png"

const FunStuff = () => {
  return (
    <ContentContainer>
      <PicturesContainer>
        <ImgContainer className="left">
          <Img src={feelings} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={plants} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={climbing} />
        </ImgContainer>
        <ImgContainer className="left">
          <Img src={embroidery} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={tatum} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={eggs} />
        </ImgContainer>
        <ImgContainer className="left">
          <Img src={mothmoon} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={snowboarding} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={watercolor} />
        </ImgContainer>
        <ImgContainer className="left">
          <Img src={collagequeen} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={butterflies} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={climbing2} />
        </ImgContainer>
        <ImgContainer className="left">
          <Img src={backcountry} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={weaving} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={popsicle} />
        </ImgContainer>
        <ImgContainer className="left">
          <Img src={quilt} />
        </ImgContainer>
        <ImgContainer className="center">
          <Img src={biking} />
        </ImgContainer>
        <ImgContainer className="right">
          <Img src={collagelady} />
        </ImgContainer>
      </PicturesContainer>
    </ContentContainer>
  )
}

const ImgContainer = styled.div`
  overflow: hidden;
  max-width: 398px;
  max-height: 378px;
  margin: 30px auto 0;
  width: 100%;

  ${breakpoint("tablet")`
    margin: 30px 0 0;
    width: 32%;
  `}
`

const Img = styled.img`
  max-width: 398px;
  display: flex;
  width: 100%;
`

const PicturesContainer = styled.div`
  width: 100%;
  padding-top: 55px;
  padding-bottom: 55px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
`

export default FunStuff
