import React from "react"
import breakpoint from "styled-components-breakpoint"

import styled from "styled-components"

import { ContentContainer } from "../components/layout"
import {
  HeaderLg,
  LargeBodyText,
  ExternalLinkLg,
} from "../components/typography"
import { Rainbow } from "../components/icons"

const WorkStuff = () => {
  return (
    // Decide how to make line breaks match the design better
    <BlackSection>
      <ContentContainer>
        <StyledHeaderLg>
          I've been doing product design at Yesware for the last three years.
        </StyledHeaderLg>
        <StyledLargeBodyText>
          As part of a small design team, I wear all the "product designer"
          hats. User Research, user experience, and user interface design all
          fall into my wheelhouse. I'm the lead designer for two teams working
          under the <ExternalLinkLg> Empowered Teams</ExternalLinkLg>{" "}
          methodology and I manage one direct report.
        </StyledLargeBodyText>
        <StyledRainbow />
      </ContentContainer>
    </BlackSection>
  )
}

const StyledRainbow = styled(Rainbow)`
  margin: 0 auto;
  display: block;
  transform: rotate(-12deg);
  margin-top: 95px;
`

const BlackSection = styled.div`
  padding-top: 130px;
  background-color: ${({ theme }) => theme.colors.black};
  /* eventually change this to whatever value needs to happen with mobile layout */
  height: 675px;
  ${breakpoint("desktop")`
    height: 675px;
  `}
`
const StyledLargeBodyText = styled(LargeBodyText)`
  margin-top: 90px;
  color: ${({ theme }) => theme.colors.white};
`

const StyledHeaderLg = styled(HeaderLg)`
  color: ${({ theme }) => theme.colors.pink};
`

export default WorkStuff
