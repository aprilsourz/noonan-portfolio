import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import {
  BodyText,
  HeaderSm,
  SmallGreyItalic,
} from "../../components/typography"

import widestImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/01-widest.png"
import mediumImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/02-medium.png"
import smallestImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/03-smallest.png"
import emptyStateImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/04-empty-state.png"
import loadingStateImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/05-loading-state.png"
import interactionsImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/06-interactions.png"
import tooltipImg from "../../img/surfacing-data-and-insights/final-designs-images/07-interface_nuances/07-tooltip.png"
import fullDesign from "../../img/surfacing-data-and-insights/00-reporting-header-image.png"

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
        <div>
          <ResponsiveBehaviorContainer>
            <ResponsiveBehaviorOne src={widestImg} />
            <ResponsiveBehaviorTwo src={mediumImg} />
            <ResponsiveBehaviorThree src={smallestImg} />
          </ResponsiveBehaviorContainer>
          <SubText>responsive behavior</SubText>
        </div>
        <TwoImageContainer>
          <UxExampleContainer>
            <UxExampleImg src={emptyStateImg} />
            <SubText>empty and onboarding states</SubText>
          </UxExampleContainer>
          <UxExampleContainer>
            <UxExampleImg src={loadingStateImg} />
            <SubText>loading state</SubText>
          </UxExampleContainer>
        </TwoImageContainer>
        <TwoImageContainer>
          <UxExampleContainer>
            <UxExampleImg src={interactionsImg} />
            <SubText>card hover interaction</SubText>
          </UxExampleContainer>
          <UxExampleContainer>
            <UxExampleImg src={tooltipImg} />
            <SubText>tooltip hover interaction</SubText>
          </UxExampleContainer>
        </TwoImageContainer>
      </ContentContainer>
    </FullWidthBackground>
    <FullWidthBackground className="responsive-align-center">
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyText>
          After working through and considering all the nuances and interactions
          of the dashboard interface, Caro and I planned out the specific scope
          of what we would release for the MVP. We felt confident in the design
          and our plan for rolling out the MVP with fast follow ons. We plan to
          measure user engagement with the dashboard and will seek post-rollout
          feedback after releasing the MVP to understand what additional data
          users would find valuable to access via the dashboard.
          <br />
          <br />
          We feel confident in our ability to scale the dashboard based on the
          flexible design and UI and we hope to continue adding value as we
          understand what additional data users are seeking at this level.
        </BodyText>
        <FinalImg src={fullDesign} />
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const FinalImg = styled.img`
  max-width: 922px;
  max-height: 531px;
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  display: block;


  ${breakpoint("tablet")`
    margin-top: 50px;
  `}
`

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

const SubText = styled(SmallGreyItalic)`
  margin-top: 15px;
  text-align: center;
`
const UxExampleContainer = styled.div`
  width: fit-content;
`
const UxExampleImg = styled.img`
  @media screen and (max-width: 700px) {
    max-width: 612px;
    max-height: 340px;
    width: 100%;
    height: unset;
    margin: 30px auto 0;
  }

  margin-top: 30px;
  width: 612px;
  height: 340px;
`

const TwoImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1233px) {
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
