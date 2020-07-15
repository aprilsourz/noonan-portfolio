import React from "react"
import Grid from "styled-components-grid"
import styled from "styled-components"
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
          <HeaderMdAlignCenter>experience</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            SENIOR PRODUCT DESIGNER - YESWARE
            <br />
            2017 - PRESENT
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            I’m currently a senior designer at Yesware. I lead design for two of
            our engineering teams and I’m a manager of one direct report (a
            product designer).
            <br />
            <br />
          </BodyText>
          <BoldBodyText>responsibilities include:</BoldBodyText>
          <BodyText>
            Designing useful, intuitive, and easy-to-incorporate workflows for
            sales account executives. Running various types of research studies
            to gather feedback and validate vision, direction, and design
            decisions. Working collaboratively with the design team to maintain
            brand, UX, and UI consistency across the product. Working closely
            with product managers and tech leads to define team and product
            strategy, direction, and priorities.
            <br />
            <br />
            Managing, coaching, and mentoring my direct report. Providing
            continuous feedback and guidance. Promoting professional growth both
            in hard skills and soft skills. Motivating and inspiring employee
            engagement, output, and satisfaction.
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            PRODUCT DESIGNER - MAXWELL HEALTH
            <br />
            2014 - 2017
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            I was the product design lead for one of Maxwell Health’s core
            platforms, Tempo. Tempo is a SaaS product that provides a way for
            benefits advisors to deploy employee benefits technology to their
            clients.
            <br />
            <br />
          </BodyText>
          <BoldBodyText>responsibilities included:</BoldBodyText>
          <BodyText>
            Designing the user interface and user experience for Tempo starting
            with sketches and taking designs through to final high-fidelity
            mock-ups. Creating workflows and wireframes for new functionality
            and features. Working collaboratively on a team with engineers and
            product management to create and implement user-facing features in
            an Agile environment. Leading user research efforts including
            creating and testing user experience and design prototypes for new
            functionality.
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            BRAND DEVELOPER AND VISUAL DESIGNER - REDEEMER CHURCH
            <br />
            2013 - 2018
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            I worked with Redeemer Church to continuously develop their brand
            and provide cohesive visual design assets in print as well as on the
            web.
          </BodyText>
          <BoldBodyText>responsibilities included:</BoldBodyText>
          <BodyText>
            Maintaining brand standards across all assets. Providing design
            assets for all sermon series including slides, web banners, and
            social media images. Creating event posters. Designing brochures,
            pamphlets, business cards, interior and exterior signage.
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>skills & tools</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
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
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>connect</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <LargeBodyTextLineHeight>
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
          </LargeBodyTextLineHeight>
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

const LargeBodyTextLineHeight = styled.div`
  line-height: ${({ theme }) => theme.typography.largeBodyTextLineHeight};
`
export default Experience
