import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BodyText, HeaderSm } from "../../components/typography"

import widestImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/01-widest.png"
import mediumImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/02-medium.png"
import smallestImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/03-smallest.png"
import emptyStateImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/04-empty-state.png"
import loadingStateImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/05-loading-state.png"
import interactionsImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/06-interactions.png"
import tooltipImg from "../../img/surfacing-data/final-designs-images/07-interface_nuances/07-tooltip.png"

const LookingAhead = () => (
  <>
    <FullWidthBackground
      backgroundColor="lightGreen"
      className="responsive-align-center"
    >
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <GreenHeaderSm>INTERFACE NUANCES</GreenHeaderSm>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1247px" }}>
        <ResponsiveBehaviorContainer>
          <ResponsiveBehaviorOne src={widestImg} />
          <ResponsiveBehaviorTwo src={mediumImg} />
          <ResponsiveBehaviorThree src={smallestImg} />
        </ResponsiveBehaviorContainer>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const ResponsiveBehaviorOne = styled.img`
  @media screen and (max-width: 550px) {
    max-width: 492px;
    max-height: 272px;
    width: 100%;
    height: unset;
    margin: 0 auto;
  }

  width: 492px;
  height: 272px;
`

const ResponsiveBehaviorTwo = styled.img`
  @media screen and (max-width: 550px) {
    max-width: 419px;
    max-height: 272px;
    width: 90%;
    height: unset;
    margin: 0 auto;
  }

  @media screen and (max-width: 930px) {
    margin-top: 20px;
  }

  width: 419px;
  height: 272px;
`

const ResponsiveBehaviorThree = styled.img`
  @media screen and (max-width: 550px) {
    max-width: 297px;
    max-height: 272px;
    width: 75%;
    height: unset;
    margin: 0 auto;
  }

  @media screen and (max-width: 1217px) {
    margin-top: 20px;
  }

  width: 297px;
  height: 272px;
`

const ResponsiveBehaviorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  flex-wrap: wrap;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}

  @media screen and (max-width: 1217px) {
    justify-content: space-around;
  }
`

const GreenHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.green};

  margin-top: 15px;

  ${breakpoint("tablet")`
    margin-top: 30px;
  `}
`

export default LookingAhead
