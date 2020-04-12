import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"

export const LargeTitleText = styled.h1`
  font-family: "Raleway Semi Bold", sans-serif;
  font-size: 50px;
`

export const LargeBodyText = styled.p`
  font-family: "Raleway Regular", sans-serif;
  font-size: 30px;
`

export const HeaderLg = styled.h2`
  font-family: "Raleway Semi Bold", sans-serif;
  font-size: 40px;
`

export const HeaderMd = styled.h3`
  font-family: "Raleway Regular Italic", sans-serif;
  font-size: 30px;
`

export const HeaderSm = styled.h4`
  font-family: "Raleway Extra Bold", sans-serif;
  font-size: 20px;
  text-transform: uppercase;
`

export const BodyText = styled.p`
  font-family: "Raleway Extra Light", sans-serif;
  font-size: 20px;
`

export const BoldBodyText = styled.p`
  font-family: "Raleway Regular", sans-serif;
  font-size: 20px;
`

export const Link = styled(ReactRouterLink)`
  font-size: 20px;
  font-family: "Raleway Regular Italic", sans-serif;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
`

export const ExternalLink = styled.a`
  font-size: 20px;
  font-family: "Raleway Regular Italic", sans-serif;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
`
