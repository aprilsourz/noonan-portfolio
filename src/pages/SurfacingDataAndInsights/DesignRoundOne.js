import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { HeaderSm, BodyText } from "../../components/typography"

import iteration1 from "../../img/surfacing-data-and-insights/03-design-round-one-images/iteration1.png"
import iteration2 from "../../img/surfacing-data-and-insights/03-design-round-one-images/iteration2.png"
import iteration3 from "../../img/surfacing-data-and-insights/03-design-round-one-images/iteration3.png"
import iteration4 from "../../img/surfacing-data-and-insights/03-design-round-one-images/iteration4.png"

const DesignRoundOne = () => (
  <FullWidthBackground
    backgroundColor="white"
    className="responsive-align-center"
  >
    <ContentContainer style={{ maxWidth: "1040px" }}>
      <GreenHeaderSm>DESIGN ROUND ONE</GreenHeaderSm>
      <BodyTextWithMargin>
        In my first set of iterations, I played with a few different layouts,
        interface styles, and which questions users would be most interested in
        answering about their data at this higher level. Having recently been
        doing very research-heavy projects, I really enjoyed getting to jump
        into the design phase of this project.
      </BodyTextWithMargin>
    </ContentContainer>
    <ContentContainer style={{ maxWidth: "1250px" }}>
      <PicturesContainer>
        <ImgContainer>
          <Img src={iteration1} />
        </ImgContainer>
        <ImgContainer>
          <Img src={iteration2} />
        </ImgContainer>
        <ImgContainer className="bottom">
          <Img src={iteration3} />
        </ImgContainer>
        <ImgContainer className="bottom">
          <Img src={iteration4} />
        </ImgContainer>
      </PicturesContainer>
    </ContentContainer>
  </FullWidthBackground>
)

const GreenHeaderSm = styled(HeaderSm)`
  color: ${({ theme }) => theme.colors.green};
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 12px;

  ${breakpoint("tablet")`
    margin-top: 25px;
  `}
`

const ImgContainer = styled.div`
  overflow: hidden;
  max-width: 600px;
  max-height: 345px;
  margin: 0 auto;
  width: 100%;

  &:not(:first-of-type) {
    margin-top: 30px;
  }

  ${breakpoint("tablet")`
    margin: 0;
    width: 48%;
    
    &:not(:first-of-type) {
      margin-top: 0px;
    }

    &.bottom {
      margin-top: 30px;
    }
  `}
`

const Img = styled.img`
  max-width: 600px;
  display: flex;
  width: 100%;
`

const PicturesContainer = styled.div`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;

  ${breakpoint("tablet")`
    padding-top: 60px;
  `}
`

export default DesignRoundOne
