import React from "react"
import breakpoint from "styled-components-breakpoint"
import styled from "styled-components"
import carouselImageOne from "../../img/decreasing-user-friction_carousel1.png"
import carouselImageTwo from "../../img/decreasing-user-friction_carousel2.png"
import carouselImageThree from "../../img/decreasing-user-friction_carousel3.png"
import carouselImageFour from "../../img/decreasing-user-friction_carousel4.png"
import carouselImageFive from "../../img/decreasing-user-friction_carousel5.png"

import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BodyText, BoldBodyText } from "../../components/typography"

import SectionDivider from "../../components/SectionDivider"

const DesignResearchIterate = () => (
  <>
    <FullWidthBackground backgroundColor="white">
      <ContentContainer style={{ maxWidth: "1240px" }}>
        <SectionDivider color="white" bgColor="blue">
          / design, research, iterate
        </SectionDivider>
      </ContentContainer>
      <ContentContainer style={{ maxWidth: "1040px" }}>
        <BodyTextWithMargin60>
          Due to conflicting priorities for our team, we put this project down
          for a few months and picked it back up in October of 2018. In the time
          that passed, it had become clear that in order to truly create an
          intuitive workflow for “in-progress” edits, we would also need to
          visually redesign several key Ul components of the feature. Our
          highest priorities were to:
        </BodyTextWithMargin60>

        <BlueRectangle>
          <BoldBodyText>
            Users should be able to see what content they've already
            personalized.
          </BoldBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Those who are scheduled to be sent that touch within the next
                five minutes.
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                They should be able to use this UI to personalize messaging
                that's already been scheduled for a given recipient.
              </li>
            </ul>
          </ItalicBodyText>
        </BlueRectangle>
        <BlueRectangle>
          <BoldBodyText>
            Clarify what happens in create mode, edit mode, and add recipients
            mode.
          </BoldBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Users don't understand this, so when they make changes in a
                given mode, they have no idea who will get the changes or, they
                erroneously think changes they make will be saved to the
                campaign.
              </li>
            </ul>
          </ItalicBodyText>
          <ItalicBodyText>
            <ul style={{ listStyle: "unset" }}>
              <li>
                Users don't understand this, so when they make changes in a
                given mode, they have no idea who will get the changes or, they
                erroneously think changes they make will be saved to the
                campaign.
              </li>
            </ul>
          </ItalicBodyText>
        </BlueRectangle>
        <BodyTextWithMargin40>
          Based on the above priorities and the initial feedback we had
          received, I worked towards updating the Campaigns Ul and
          editing-specific workflows throughout the entire feature. I not only
          updated specific Ul components that already existed as part of
          Campaigns, but I also designed a brand new piece of functionality that
          would allow users to more specifically understand what content their
          individual recipients would be receiving and the ability to customize
          that content on a per recipient basis.
        </BodyTextWithMargin40>
      </ContentContainer>
    </FullWidthBackground>
    <FullWidthBackground backgroundColor="lightGrey">
      <ContentContainer style={{ maxWidth: "1290px" }}>
        <CarouselContainer>
          <Carousel
            infinite
            arrows
            dots
            slidesPerScroll={2}
            slidesPerPage={2}
            breakpoints={{
              737: {
                arrows: false,
                slidesPerScroll: 1,
                slidesPerPage: 1,
              },
            }}
          >
            <img src={carouselImageOne} alt="" />
            <img src={carouselImageTwo} alt="" />
            <img src={carouselImageThree} alt="" />
            <img src={carouselImageFour} alt="" />
            <img src={carouselImageFive} alt="" />
          </Carousel>
        </CarouselContainer>
      </ContentContainer>
    </FullWidthBackground>
  </>
)

const BodyTextWithMargin60 = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
  `}
`

const BodyTextWithMargin40 = styled(BodyText)`
  margin-top: 20px;

  ${breakpoint("tablet")`
    margin-top: 40px;
  `}
`

const ItalicBodyText = styled(BodyText)`
  font-style: italic;
  margin-top: 10px;
  margin-left: 20px;

  ${breakpoint("tablet")`
  margin-top: 20px;
`};
`

const BlueRectangle = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.blue};
  margin: 10px auto 0;
  padding: 5px;
  max-width: 1000px;

  :first-of-type {
    margin-top: 30px;
  }

  ${breakpoint("tablet")`
    padding: 20px;
    :first-of-type {
      margin-top: 60px;
    }
  `}
`

const CarouselContainer = styled.div`
  margin: 0 auto;
`

export default DesignResearchIterate
