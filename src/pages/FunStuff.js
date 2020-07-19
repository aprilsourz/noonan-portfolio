import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"
import Grid from "styled-components-grid"

import { ContentContainer } from "../components/layout"
import SectionDivider from "../components/SectionDivider"
import { LargeTitleText, LargeBodyText } from "../components/typography"
import { Clouds } from "../components/icons"

import feelings from "../img/01-feelings.png"
import plants from "../img/02-plants.png"
import climbing from "../img/03-climbing1.png"
import embroidery from "../img/04-embroidery.png"
import tatum from "../img/05-tatum.png"
import eggs from "../img/06-eggs.png"
import mothmoon from "../img/07-mothmoon.png"
import snowboarding from "../img/08-snowboarding.png"
import watercolor from "../img/09-watercolor.png"
import collagequeen from "../img/10-collagequeen.png"
import butterflies from "../img/11-butterflies.png"
import climbing2 from "../img/12-climbing2.png"
import backcountry from "../img/13-backcountry.png"
import weaving from "../img/14-weaving.png"
import popsicle from "../img/15-popsicle.png"
import quilt from "../img/16-quilt.png"
import biking from "../img/17-biking.png"
import collagelady from "../img/18-collagelady.png"

const FunStuff = () => {
  return (
    <>
      <BlackSection>
        <ContentContainer>
          <IntroTextContainer>
            <StyledLargeTitleText>
              Outside of work, you can find me…
            </StyledLargeTitleText>
            <StyledLargeBodyText>
              Crafting, climbing, biking, illustrating, snowboarding, making
              cards, quilting, painting, giving presents, and straight up day
              dreaming. I’m a creator by nature - check out what I’m up to
              outside of working hours.
            </StyledLargeBodyText>
          </IntroTextContainer>
          <StyledClouds />
          <StyledSectionDivider>/ on the side</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <div>
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
      </div>
    </>
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

const IntroTextContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  ${breakpoint("desktop")`
    width: 1015px;
    padding: 0px;
  `}
`

const StyledSectionDivider = styled(SectionDivider)`
  background-color: ${({ theme }) => theme.colors.green};
  top: 34px;
  position: relative;
`

const StyledClouds = styled(Clouds)`
  display: block;
  margin: 0 auto;
  margin-top: 47.5px;
  margin-bottom: -17px;

  ${breakpoint("tablet")`
    margin-top: 95px;
    margin-bottom: 35px;
  `}
`

const BlackSection = styled.div`
  padding-top: 130px;
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 95px;

  ${breakpoint("tablet")`
     padding-top: 195px;
  `}
`
const StyledLargeBodyText = styled(LargeBodyText)`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 45px;

  ${breakpoint("tablet")`
    margin-top: 90px;
  `}
`

const StyledLargeTitleText = styled(LargeTitleText)`
  color: ${({ theme }) => theme.colors.green};
`
export default FunStuff
