import React from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
import { TextContainer } from "../../components/layout"
import {
  BodyText,
  BoldBodyText,
  HeaderMd,
  ExternalLink,
} from "../../components/typography"
import breakpoint from "styled-components-breakpoint"
import SectionDivider from "../../components/SectionDivider"

const Experience = () => {
  return (
    <>
      <BlueDivider>/ experience</BlueDivider>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>about</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              diam vulputate ut pharetra sit. Mi ipsum faucibus vitae aliquet
              nec. Tellus cras adipiscing enim eu. Urna nunc id cursus metus
              aliquam eleifend mi. Cras semper auctor neque vitae tempus. Eget
              arcu dictum varius duis at consectetur lorem donec. Ut lectus arcu
              bibendum at varius vel pharetra vel. Interdum posuere lorem ipsum
              dolor sit amet consectetur adipiscing. Amet aliquam id diam
              maecenas. Porttitor eget dolor morbi non arcu. Cras ornare arcu
              dui vivamus arcu felis. Vitae tempus quam pellentesque nec nam
              aliquam sem et tortor.
              <br />
              <br />
              Nulla pharetra diam sit amet. Tempor orci eu lobortis elementum.
              Aliquam sem et tortor consequat id. Ipsum dolor sit amet
              consectetur adipiscing elit. Id eu nisl nunc mi. Nunc eget lorem
              dolor sed viverra ipsum. Consequat nisl vel pretium lectus quam.
              Aliquet bibendum enim facilisis gravida neque convallis a. Pretium
              lectus quam id leo. Magna ac placerat vestibulum lectus mauris
              ultrices.
            </BodyText>
          </TextContainer>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>experience</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <BoldBodyText>
              SENIOR PRODUCT DESIGNER - YESWARE
              <br />
              2017 - PRESENT
              <br />
              <br />
            </BoldBodyText>
            <BodyText>
              Nulla pharetra diam sit amet. Tempor orci eu lobortis elementum.
              Aliquam sem et tortor consequat id.
              <br />
              <br />
              Ipsum dolor sit amet consectetur adipiscing elit. Id eu nisl nunc
              mi. Nunc eget lorem dolor sed viverra ipsum.
              <br />
              <br />
              Vitae tempus quam pellentesque nec nam aliquam sem et tortor.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Tellus cras adipiscing enim eu. Urna nunc id cursus metus aliquam
              eleifend mi.
            </BodyText>
          </TextContainer>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />

        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <BoldBodyText>
              PRODUCT DESIGNER - MAXWELL HEALTH
              <br />
              2014 - 2017
              <br />
              <br />
            </BoldBodyText>
            <BodyText>
              Nulla pharetra diam sit amet. Tempor orci eu lobortis elementum.
              Aliquam sem et tortor consequat id.
              <br />
              <br />
              Ipsum dolor sit amet consectetur adipiscing elit. Id eu nisl nunc
              mi. Nunc eget lorem dolor sed viverra ipsum.
              <br />
              <br />
              Vitae tempus quam pellentesque nec nam aliquam sem et tortor.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              Tellus cras adipiscing enim eu. Urna nunc id cursus metus aliquam
              eleifend mi.
            </BodyText>
          </TextContainer>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <BoldBodyText>
              BRAND DEVELOPER AND VISUAL DESIGNER - REDEEMER CHURCH
              <br />
              2013 - 2018
              <br />
              <br />
            </BoldBodyText>
            <BodyText>
              Nulla pharetra diam sit amet. Tempor orci eu lobortis elementum.
              Aliquam sem et tortor consequat id.
              <br />
              <br />
              Ipsum dolor sit amet consectetur adipiscing elit. Id eu nisl nunc
              mi. Nunc eget lorem dolor sed viverra ipsum.
            </BodyText>
          </TextContainer>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>skills & tools</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainer>
            <SkillsBlock>
              <BoldBodyText>
                user experience design
                <br />
              </BoldBodyText>
              <ItalicBodyTextLight>
                prototyping
                <br />
                wireframing
                <br />
                sketching
                <br />
                information architecture
              </ItalicBodyTextLight>
            </SkillsBlock>
            <SkillsBlock>
              <BoldBodyText>
                user interface design
                <br />
              </BoldBodyText>
              <ItalicBodyTextLight>
                design system creation
                <br />
                visual design
                <br />
                illustration
                <br />
                branding and identity
              </ItalicBodyTextLight>
            </SkillsBlock>
          </TextContainer>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>connect</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <TextContainerlargeBodyTextLineHeight>
            <ExternalLink
              rel="noreferrer noopener"
              href="mailto:carrie.jo.noonan@gmail.com"
              target="_blank"
            >
              carrie.jo.noonan@gmail.com
            </ExternalLink>
            <br />
            <ExternalLink
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/carrie-noonan-581b9b59/"
              target="_blank"
            >
              LinkedIn
            </ExternalLink>
          </TextContainerlargeBodyTextLineHeight>
        </Grid.Unit>
      </StyledGrid>
    </>
  )
}

const BlueDivider = styled(SectionDivider)`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 75px;
  margin-bottom: 40px;

  ${breakpoint("tablet")`
     margin-top: 150px;
     margin-bottom: 80px
  `};
`

const HeaderMdAlignCenter = styled(HeaderMd)`
  margin-bottom: 10px;
  margin-left: 5px;
  ${breakpoint("tablet")`
    text-align: center;
     margin-bottom: 0;
  `}
`

const StyledGrid = styled(Grid)`
  margin-bottom: 40px;

  ${breakpoint("tablet")`
   margin-bottom: 80px
`}
`

const SkillsBlock = styled.div`
  margin-bottom: 25px;
  line-height: ${({ theme }) => theme.typography.largeBodyTextLineHeight};

  ${breakpoint("tablet")`
    margin-bottom: 50px;
  `}
`

const ItalicBodyTextLight = styled(BodyText)`
  font-style: italic;
  font-weight: 100;
`

const TextContainerlargeBodyTextLineHeight = styled(TextContainer)`
  line-height: ${({ theme }) => theme.typography.largeBodyTextLineHeight};
`
export default Experience
