import styled from "styled-components"
import { Link as ReactRouterLink } from "react-router-dom"
import breakpoint from "styled-components-breakpoint"

export const LargeTitleText = styled.h1`
  font-family: ${({ theme }) => theme.typography.largeTitleText.fontFamily};
  font-size: ${({ theme }) => theme.typography.largeTitleText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeTitleText.fontSize};
  `}
`

export const LargeBodyText = styled.p`
  font-family: ${({ theme }) => theme.typography.largeBodyText.fontFamily};
  font-size: ${({ theme }) => theme.typography.largeBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.largeBodyText.fontSize};
  `}
`

export const HeaderLg = styled.h2`
  font-family: ${({ theme }) => theme.typography.headerLgText.fontFamily};
  font-size: ${({ theme }) => theme.typography.headerLgText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerLgText.fontSize};
  `}
`

export const HeaderMd = styled.h3`
  font-family: ${({ theme }) => theme.typography.headerMdText.fontFamily};
  font-size: ${({ theme }) => theme.typography.headerMdText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerMdText.fontSize};
  `}
`

export const HeaderSm = styled.h4`
  font-family: ${({ theme }) => theme.typography.headerSmText.fontFamily};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.headerSmText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.headerSmText.fontSize};
  `}
`

export const BodyText = styled.p`
  font-family: ${({ theme }) => theme.typography.normalBodyText.fontFamily};
  font-size: ${({ theme }) => theme.typography.normalBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.normalBodyText.fontSize};
  `}
`

export const BoldBodyText = styled.p`
  font-family: ${({ theme }) => theme.typography.boldBodyText.fontFamily};
  font-size: ${({ theme }) => theme.typography.boldBodyText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.boldBodyText.fontSize};
  `}
`

export const Link = styled(ReactRouterLink)`
  font-family: ${({ theme }) => theme.typography.linkText.fontFamily};
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`

export const ExternalLink = styled.a`
  font-family: ${({ theme }) => theme.typography.linkText.fontFamily};
  color: ${({ theme }) => theme.colors.green};
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.linkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.linkText.fontSize};
  `}
`

export const NavLinkText = styled.span`
  font-family: ${({ theme }) => theme.typography.navLinkText.fontFamily};
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.typography.navLinkText.mobileFontSize};

  ${breakpoint("tablet")`
    font-size: ${({ theme }) => theme.typography.navLinkText.fontSize};
  `}
`
