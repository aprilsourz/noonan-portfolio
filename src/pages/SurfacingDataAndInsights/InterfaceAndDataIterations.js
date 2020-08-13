import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { FullWidthBackground, ContentContainer } from "../../components/layout"
import SectionDivider from "../../components/SectionDivider"
import { BodyText } from "../../components/typography"

const InterfaceAndDataIterations = ({ history }) => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider bgColor="green" color="white">
          / interface and data iterations
        </SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyTextWithMargin>
          Because this project had already been through a round of research and
          several design concepts, I was able to pick it up and jump right into
          further iterations on the user interface. I started with Ryan’s
          original designs and my own sketches and notes to further align the
          design to meet the project goals and match the updated look and feel
          Yesware’s design system had been transitioning into.
        </BodyTextWithMargin>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
      margin-top: 60px;
  `}
`

export default InterfaceAndDataIterations
