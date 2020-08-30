import React from "react"
import styled from "styled-components"
import { HeaderLg } from "../components/typography"

const Divider = styled.header`
  text-align: center;
  height: 70px;
  max-width: 1240px;
  color: ${({ theme, color }) => theme.colors[color]};
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
`

const StyledHeaderLg = styled(HeaderLg)`
  position: relative;
  font-weight: 500;
  top: 50%;
  transform: translateY(-50%);
  line-height: unset;
`

const SectionDivider = ({
  backgroundColor = "pink",
  color = "black",
  children,
  className,
}) => {
  return (
    <Divider className={className} color={color} backgroundColor={backgroundColor}>
      <StyledHeaderLg>{children}</StyledHeaderLg>
    </Divider>
  )
}

export default SectionDivider
