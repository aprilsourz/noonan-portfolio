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
            PRODUCT DESIGNER - LATTICE
            <br />
            Apr 2021 - present / Remote
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            Leading design for Lattice’s integrated employee development solution, Grow, a product that helps HR admins effortlessly manage role expectations as their company evolves, empowers managers to successfully support their direct reports, and gives employees ownership over their growth.
            <br />
            <br />
            <ul style={{ listStyle: "unset" }}>
              <li>
                Currently leading design with a focus on driving value and engagement for the employee and manager personas within the Lattice Performance suite by identifying key workflow gaps and building connected career development features in Lattice
              </li>
              <li>
                Regularly partner with teammates across disciplines to build and strengthen team culture; facilitated roles and responsibilities conversations between design and engineering disciplines identifying where in the project lifecycle communication and process could be improved; partnered with design colleagues to voice and identify a need to strengthen the Product Design team’s identity as we scaled the team and evolved processes
              </li>
              <li>
                Co-led discovery and research to understand job architecture in the HR industry and defined how to build an integrated job architecture platform into Lattice that would create a connective tissue between products at a foundational level and solve a deep HR admin pain point
              </li>
              <li>
                Designed the user experience and interface of the job architecture platform in Lattice; collaborated across three cross-functional teams to implement a foundation of clearly defined rules and logic that connected and shared data across Lattice’s Grow, Compensation, and Platform products (previously unconnected products); launched a beta to early access participants that successfully validated core workflows and value; in less than 2 months after general release, saw a 200% increase in setup activities for companies using job architecture in Lattice
              </li>
              <li>
                Researched, designed and implemented core workflow improvements in Grow that solved key HR admin pain points including: introducing a table stakes reporting feature, building and defining HRIS data integration workflows, and identifying iterative improvements to the usability of the product for the admin persona
              </li>
              <li>
                With a small group of cross-discipline teammates in the design org, contributed to designing, collecting content, and writing for the Lattice Design Newsletter. Sent out quarterly to the company with the intention of highlighting the team’s processes, sharing project launches, and giving the org a closer look at our growing design org
              </li>
            </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            SENIOR PRODUCT DESIGNER - YESWARE
            <br />
            Mar 2019 - Oct 2020 / Boston, MA (remote)
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            Led design for multiple engineering teams and managed one direct report 
            at Yesware, a SaaS company that helps salespeople build meaningful relationships
            and improve outcomes 
            <br />
            <br />
            <ul style={{ listStyle: "unset" }}>
              <li>
                Managed, coached, and mentored a direct report; provided continuous
                feedback and guidance; promoted professional growth in hard and soft
                skills; motivated and inspired employee engagement, output, and satisfaction
              </li>
              <li>
                Designed and implemented features that increased weekly user engagement with data insights
                from less than 5% up to 40%
              </li>
              <li>
                Implemented new and improved workflows in core feature, Campaigns (an outreach and 
                email cadence tool), which increased user satisfaction and retention and reduced 
                weekly support tickets by 22% over six months
              </li>
              <li>
                Led weekly design critiques and team meetings for a team of 4 designers; encouraged 
                and introduced various team building activities
              </li>
            </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            PRODUCT DESIGNER - YESWARE
            <br />
            Apr 2017 - Mar 2019 / Boston, MA
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            Led design and research for Yesware’s core feature, Campaigns, an outreach and 
            email cadence tool to help salespeople build and maintain relationships 
            <br />
            <br />
            <ul style={{ listStyle: "unset" }}>
              <li>
                Worked closely with product management to merge two similar but 
                different features into one core capability set called Campaigns; 
                included a full redesign and new information architecture across 
                the new feature
              </li>
              <li>
                Built and evangelized primary and secondary customer personas, 
                including full journey maps based on extensive user research
              </li>
              <li>
                Conducted over 150 user interviews for a multitude of research 
                studies across projects
              </li>
              <li>
                Championed a design system and brand cohesion across the product 
                by founding an internal guild of cross-collaborative team members 
                to implement a cross-functional design system
              </li>
            </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            PRODUCT DESIGNER - MAXWELL HEALTH
            <br />
            Feb 2014 - Apr 2017 / Boston, MA
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
            Led design for one of Maxwell Health’s core platforms, Tempo, a SaaS 
            product that provides benefits advisors with the ability to deliver 
            employee benefits technology directly to their clients
            <br />
            <br />
            <ul style={{ listStyle: "unset" }}>
              <li>
                Designed the entire user experience and user interface for Maxwell 
                Health’s platform, Tempo; collaborated on a cross-functional team 
                to launch a beta of Tempo followed by a full launch of the product 
                three months later which reduced the cost to onboard employers by 5x
              </li>
              <li>
                Conducted weekly user interviews with benefits advisor partners to 
                understand pain points, goals, workflows, and opportunities
              </li>
              <li>
                Led a visual redesign of Maxwell Health’s employee platform that helped 
                maintain brand consistency and increased usability
              </li>
              <li>
                Led user research efforts for different core users; collected, analyzed, 
                and summarized data from user research to validate designs and prioritize 
                upcoming work
              </li>
              </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            BRAND DEVELOPER AND VISUAL DESIGNER - REDEEMER CHURCH
            <br />
            Jun 2013 - Jun 2018 / Somerville, MA
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
          Worked with Redeemer Church to continuously develop their brand and provide 
          cohesive visual design assets in print and on the web
          <br />
          <br />
          <ul style={{ listStyle: "unset" }}>
            <li>
              Developed Redeemer’s brand including their logo, color palette, text styles, 
              and illustrations
            </li>
            <li>
              Maintained brand consistency across all assets and various mediums
            </li>
            <li>
              Designed all sermon series visuals and graphics and provided all design assets 
              including slides, web banners, and social media images
            </li>
            <li>
              Designed brochures, pamphlets, business cards, interior and exterior signage, and posters
            </li>
          </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }} />
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <BoldBodyText>
            GRAPHIC DESIGN INTERN - MOTIV
            <br />
            Aug 2013 - Dec 2013 / Boston, MA
            <br />
            <br />
          </BoldBodyText>
          <BodyText>
          Interned on the graphics team, designing across various mediums for a number of brands
          <br />
          <br />
          <ul style={{ listStyle: "unset" }}>
            <li>
            Developed package design, label design, signage, and other graphics projects for clients 
            as directed by creative directors
            </li>
          </ul>
          </BodyText>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>competencies</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <SkillsBlock>
            <BoldBodyText>
              core competencies
              <br />
            </BoldBodyText>
            <BodyText>
              user experience design, user interface design, user research, continuous discovery,
              product strategy and prioritization, interaction design, information architecture,
              design systems, management, mentorship
            </BodyText>
          </SkillsBlock>
          <SkillsBlock>
            <BoldBodyText>
              prototyping
              <br />
            </BoldBodyText>
            <BodyText>
              sketch, figma, invision, procreate, illustrator, photoshop, indesign, adobe xd
            </BodyText>
          </SkillsBlock>
          <SkillsBlock>
            <BoldBodyText>
              web dev
              <br />
            </BoldBodyText>
            <BodyText>
              html, css, git, github
            </BodyText>
          </SkillsBlock>
          <SkillsBlock>
            <BoldBodyText>
              additional
              <br />
            </BoldBodyText>
            <BodyText>
              scrum and agile processes, amplitude, zendesk, brand design, design recruiting
              and hiring, building team culture
            </BodyText>
          </SkillsBlock>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>education</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <SkillsBlock>
            <BoldBodyText>
              B.A. Arts, Graphic Design
            </BoldBodyText>
            <BodyText>
              Western Washington University
              <br />
              Sep 2009 - Jun 2013
            </BodyText>
          </SkillsBlock>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>extended education</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <SkillsBlock>
            <BoldBodyText>
              Connect by Eager Labs
            </BoldBodyText>
            <BodyText>
              Fall 2019
              <br />
              Participated in an immersive, multi-session remote training program for
              people managers who lead teams, projects, or small organizations
            </BodyText>
          </SkillsBlock>
          <SkillsBlock>
            <BoldBodyText>
              Front End Web Development
            </BoldBodyText>
            <BodyText>
              General Assembly
              <br />
              Winter 2014-15
              <br />
              Participated in a 10 week course to gain web development literacy and 
              learn how to build interactive and responsive websites
            </BodyText>
          </SkillsBlock>
        </Grid.Unit>
      </StyledGrid>
      <StyledGrid>
        <Grid.Unit size={{ mobile: 1, tablet: 1 / 3, desktop: 1 / 3 }}>
          <HeaderMdAlignCenter>other interests</HeaderMdAlignCenter>
        </Grid.Unit>
        <Grid.Unit size={{ mobile: 1, tablet: 2 / 3, desktop: 2 / 3 }}>
          <SkillsBlock>
            <BodyText>
              biking
              <br />
              climbing
              <br />
              crafting
              <br />
              illustrating
            </BodyText>
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
  margin-top: 30px;
  margin-bottom: 40px;

  ${breakpoint("tablet")`
     margin-top: 60px;
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

  ${breakpoint("tablet")`
    margin-bottom: 50px;
  `}
`

const LargeBodyTextLineHeight = styled.div`
  line-height: ${({ theme }) => theme.typography.largeBodyTextLineHeight};
`
export default Experience
