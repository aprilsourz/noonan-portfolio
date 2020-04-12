import React from "react"
import styled from "styled-components"
import { HeaderLg } from "../components/typography"

const Divider = styled.header`
  text-align: center;
  height: 70px;
  max-width: 1240px;
  color: ${({ theme, color }) => theme.colors[color]};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`

const StyledHeaderLg = styled(HeaderLg)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const SectionDivider = ({ bgColor = "pink", color = "black", children }) => {
  return (
    <Divider color={color} bgColor={bgColor}>
      <StyledHeaderLg>{children}</StyledHeaderLg>
    </Divider>
  )
}

export default SectionDivider
