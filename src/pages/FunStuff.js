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

const WorkStuff = () => {
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
          <StyledSectionDivider>/ recent work</StyledSectionDivider>
        </ContentContainer>
      </BlackSection>
      <div>
        <ContentContainer>
          <PicturesContainer>
            <Grid>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={feelings} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={plants} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={climbing} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={embroidery} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={tatum} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={eggs} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={mothmoon} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={snowboarding} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={watercolor} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={collagequeen} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={butterflies} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={climbing2} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={backcountry} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={weaving} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={popsicle} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="left">
                  <Img src={quilt} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="center">
                  <Img src={biking} />
                </ImgContainer>
              </Grid.Unit>
              <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 3 }}>
                <ImgContainer className="right">
                  <Img src={collagelady} />
                </ImgContainer>
              </Grid.Unit>
            </Grid>
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
  margin-top: 30px;

  &.right {
    margin-left: auto;
  }

  &.center {
    margin: inherit auto;
  }
`

const Img = styled.img`
  max-width: 398px;
  display: flex;
`

const PicturesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 55px;
  padding-bottom: 55px;
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

// @TODO: Give this some kind of hover style
const ProjectSelectorBox = styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin-top: 25px;
  text-align: center;
  border-radius: 1px;
  height: 150px;
  cursor: pointer;

  &:first-of-type {
    margin-top: 55px;
  }

  ${breakpoint("tablet")`
     margin-top: 50px;
     height: 300px;

     &:first-of-type {
      margin-top: 85px;
     }
  `}
`

const ProjectSelectorText = styled(LargeBodyText)`
  color: ${({ theme }) => theme.colors.back};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export default WorkStuff
