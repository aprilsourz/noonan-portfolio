import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"

import { HeaderLg } from "../../components/typography"
import decreasingUserExperienceFriction from "../../img/decreasing-user-friction/decreasing-user-friction-header-image.png"
import dataDrivenDecisions from "../../img/data-driven-decisions/data-driven-decisions.png"
import surfacingData from "../../img/surfacing-data-and-insights/00-reporting-header-image.png"

const ProjectSelectors = ({ history }) => {
  return (
    <ProjectSelectorContainer>
      <ProjectSelectorBox
        onClick={() => history.push("/projects/decreasing-friction")}
        color="lightBlue"
      >
        <ProjectSelectorText color="blue">
          Decreasing user experience friction
        </ProjectSelectorText>
        <ImageContainer>
          <Image src={decreasingUserExperienceFriction} />
        </ImageContainer>
      </ProjectSelectorBox>
      <ProjectSelectorBox
        onClick={() => history.push("/projects/data-driven-decisions")}
        color="lightPink"
      >
        <ProjectSelectorText color="pink">
          Making data-driven decisions
        </ProjectSelectorText>
        <ImageContainer>
          <Image src={dataDrivenDecisions} />
        </ImageContainer>
      </ProjectSelectorBox>
      <ProjectSelectorBox
        className="second-row"
        onClick={() =>
          history.push("/projects/surfacing-data-and-insights")
        }
        color="lightGreen"
      >
        <ProjectSelectorText color="green">
          Surfacing data and insights
        </ProjectSelectorText>
        <ImageContainer>
          <Image src={surfacingData} />
        </ImageContainer>
      </ProjectSelectorBox>
    </ProjectSelectorContainer>
  )
}

const Image = styled.img`
  width: 100%;
  position: relative;
  z-index: -1;
`

const ImageContainer = styled.div`
  max-width: 577px;
  margin: 25px auto;
  display: none;

  ${breakpoint("tablet")`
    display: block;
    padding: 0px;
  `}
`

const ProjectSelectorBox = styled.div`
  background-color: ${({ color, theme }) => theme.colors[color]};
  border-radius: 1px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  overflow: hidden;
  max-width: 600px;
  height: 150px;
  width: 100%;
  margin: 0 auto;

  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: transform;
  transition-property: transform;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.03);
  }

  &:not(:first-of-type),
  .second-row {
    margin-top: 20px;
  }

  ${breakpoint("tablet")`
    height: 350px;
    width: 49%;

    &:not(:first-of-type):not(.second-row) {
      margin-top: 0px;
    }

    &.second-row {
      margin-top: 30px;
      max-width: unset;
      width: 100%;
      }
    }
  `};
`

const ProjectSelectorText = styled(HeaderLg)`
  color: ${({ theme, color }) => theme.colors[color]};
  position: relative;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${breakpoint("tablet")`
      left: 0;
      top: 0;
      transform: unset;
      margin-top: 39px;
      margin-left: 56px;
      text-align: left;
      max-width: 509px;
  `}
`

const ProjectSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
`
export default ProjectSelectors
