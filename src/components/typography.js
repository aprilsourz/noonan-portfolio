import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"
import breakpoint from "styled-components-breakpoint"

export const LargeTitleText = styled.h1`
  font-family: "Raleway Semi Bold", sans-serif;
  font-size: ${({ theme }) => theme.typography.largeTitleText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeTitleText.fontSize};
  `}
`

export const LargeBodyText = styled.p`
  font-family: "Raleway Regular", sans-serif;
  font-size: ${({ theme }) => theme.typography.largeBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeBodyText.fontSize};
  `}
`

export const HeaderLg = styled.h2`
  font-family: "Raleway Semi Bold", sans-serif;
  font-size: ${({ theme }) => theme.typography.headerLgText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerLgText.fontSize};
  `}
`

export const HeaderMd = styled.h3`
  font-family: "Raleway Regular Italic", sans-serif;
  font-size: ${({ theme }) => theme.typography.headerMdText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerMdText.fontSize};
  `}
`

export const HeaderSm = styled.h4`
  font-family: "Raleway Extra Bold", sans-serif;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.headerSmText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerSmText.fontSize};
  `}
`

export const BodyText = styled.p`
  font-family: "Raleway Extra Light", sans-serif;
  font-size: ${({ theme }) => theme.typography.normalBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.normalBodyText.fontSize};
  `}
`

export const BoldBodyText = styled.p`
  font-family: "Raleway Regular", sans-serif;
  font-size: ${({ theme }) => theme.typography.boldBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.boldBodyText.fontSize};
  `}
`

export const Link = styled(ReactRouterLink)`
  font-family: "Raleway Regular Italic", sans-serif;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`

export const ExternalLink = styled.a`
  font-family: "Raleway Regular Italic", sans-serif;
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;

  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`
