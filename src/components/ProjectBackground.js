import breakpoint from "styled-components-breakpoint"
import React from "react"
import styled from "styled-components"

import { ContentContainer, FullWidthBackground } from "../components/layout"
import { HeaderMd, BodyText, BoldBodyText } from "../components/typography"

// backgroundColor prop must be one of colors in the styled-components theme
const ProjectBackground = ({ bio, skills, dates, backgroundColor }) => (
  <FullWidthBackground
    className="responsive-align-center"
    backgroundColor={backgroundColor}
  >
    <CustomContentContainer style={{ maxWidth: "1040px" }}>
      <BackgroundContainer>
        <HeaderMdWithMargin>background</HeaderMdWithMargin>
        <BodyText>{bio}</BodyText>
      </BackgroundContainer>
      <RoleContainer>
        <HeaderMdWithMargin>role</HeaderMdWithMargin>
        <BoldBodyTextWithMargin>
          Yesware / Lead Product Designer
        </BoldBodyTextWithMargin>
        <BodyTextWithMargin>{skills}</BodyTextWithMargin>
        <BodyTextWithMargin style={{ fontStyle: "italic" }}>
          {dates}
        </BodyTextWithMargin>
      </RoleContainer>
    </CustomContentContainer>
  </FullWidthBackground>
)

const BoldBodyTextWithMargin = styled(BoldBodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
`}
`

const BodyTextWithMargin = styled(BodyText)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const HeaderMdWithMargin = styled(HeaderMd)`
  margin-bottom: 12px;

  ${breakpoint("tablet")`
    margin-bottom: 25px;
  `}
`

const CustomContentContainer = styled(ContentContainer)`
  max-width: 1020px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${breakpoint("tablet")`
    justify-content: space-between;
  `}
`

const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 700px;
`

const RoleContainer = styled.div`
  width: 100%;
  max-width: 270px;
  margin-top: 10px;

  ${breakpoint("tablet")`
    margin-top: 20px;
  `}

  ${breakpoint("desktop")`
    margin-top: 0px;
  `}
`

export default ProjectBackground
