import styled from "styled-components"
import { breakpoint } from "styled-components-breakpoint"

const GenericCard = styled.div`
  background-color: white;
  border: 1px solid #e4e6eb;
  -webkit-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  -moz-box-shadow: 4px 7px 17px -7px rgba(204, 204, 204, 1);
  box-shadow: 1px 1px 5px 0px rgba(204, 204, 204, 1);
`

export const CardLabel = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 500;

  ${breakpoint("tablet")`
    font-size: 15px;
  `}
`
export default GenericCard
