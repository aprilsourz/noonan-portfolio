import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

export const ContentContainer = styled.div`
  max-width: 1240px;
  background: transparent;
  margin: 0 auto;
`

// backgroundColor prop must be one of colors in the styled-components theme
export const FullWidthBackground = styled.div`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  padding: 35px 0;

  &.responsive-align-center {
    text-align: center;
  }

  ${breakpoint("tablet")`
    padding: 65px 0;

    &.responsive-align-center {
      text-align: left;
    }
  `}
`
