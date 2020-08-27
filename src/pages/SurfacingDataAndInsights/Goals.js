import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"
import Grid from "styled-components-grid"

import ryansFinalDesign from "../../../src/img/surfacing-data/01-ryans-final-design.png"

import { FullWidthBackground, ContentContainer } from "../../components/layout"
import {
  NumberedBlock,
  NumberedBlockText,
  ColoredNumber,
  HeaderMd,
  SmallGreyItalic,
} from "../../components/typography"

const Goals = () => (
  <>
    <FullWidthBackground
      backgroundColor="white"
      className="responsive-align-center"
    >
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <RyansFinalDesignImg src={ryansFinalDesign} />
        <ImageSubText>original design by Ryan Tengler</ImageSubText>
        <HeaderMdWithMargin>goals</HeaderMdWithMargin>
        <GridWithMargin>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock>
              <ColoredNumber color="green">1 )</ColoredNumber>
              <NumberedBlockText>
                Take the dashboard concepts that Ryan worked on and define what
                we can move forward with that will be relatively low effort for
                engineering.
              </NumberedBlockText>
            </NumberedBlock>
            <NumberedBlock>
              <ColoredNumber color="green">2 )</ColoredNumber>
              <NumberedBlockText>
                Take the dashboard concepts that Ryan worked on and define what
                we can move forward with that will be relatively low effort for
                engineering.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
          <Grid.Unit size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}>
            <NumberedBlock className="with-left-margin">
              <ColoredNumber color="green">3 )</ColoredNumber>
              <NumberedBlockText>
                Design a dashboard that gives users an at-a-glance summary of
                their personalized statistics and deeper insights into their
                activity, their recipient engagement, and the success of their
                content.
              </NumberedBlockText>
            </NumberedBlock>
          </Grid.Unit>
        </GridWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const GridWithMargin = styled(Grid)`
  margin-top: 16px;

  ${breakpoint("tablet")`
    margin-top: 32px;
  `}
`

const RyansFinalDesignImg = styled.img`
  margin: 0 auto;
  max-width: 635px;
  width: 100%;
  display: block;
`

const ImageSubText = styled(SmallGreyItalic)`
  width: fit-content;
  margin: 0 auto;
  margin-top: 15px;
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
  `}
`

export default Goals
