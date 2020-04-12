import React from "react"
import styled from "styled-components"
import {
  LargeTitleText,
  HeaderLg,
  HeaderMd,
  HeaderSm,
  BodyText,
  BoldBodyText,
  Link,
  ExternalLink,
} from "../components/typography"

const StyleGuide = () => {
  return (
    <>
      <PinkHeaderMd>Typography</PinkHeaderMd>
      <LargeTitleText>This is Large Title Text</LargeTitleText>
      <HeaderLg>This is an h1</HeaderLg>
      <HeaderMd>This is an h2</HeaderMd>
      <HeaderSm>This is an h3</HeaderSm>
      <BodyText>This is some body text.</BodyText>
      <BoldBodyText>This is some emphasised text.</BoldBodyText>
      <Link>This is a link</Link>
      <br />
      <ExternalLink>This is an external link</ExternalLink>
      <PinkHeaderMd>Components</PinkHeaderMd>
    </>
  )
}

const PinkHeaderMd = styled(HeaderMd)`
  color: ${({ theme }) => theme.colors.pink};
`

export default StyleGuide
