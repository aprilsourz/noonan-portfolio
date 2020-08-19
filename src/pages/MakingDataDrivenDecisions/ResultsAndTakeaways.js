import breakpoint from "styled-components-breakpoint"

import React from "react"
import styled from "styled-components"
import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import { ContentContainer, FullWidthBackground } from "../../components/layout"
import { BodyText } from "../../components/typography"
import SectionDivider from "../../components/SectionDivider"

import carouselImage1 from "../../img/data-driven_carousel1.png"
import carouselImage2 from "../../img/data-driven_carousel2.png"
import carouselImage3 from "../../img/data-driven_carousel3.png"
import carouselImage4 from "../../img/data-driven_carousel4.png"
import carouselImage5 from "../../img/data-driven_carousel5.png"
import carouselImage6 from "../../img/data-driven_carousel6.png"

class TheExperiment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  onChange = (value) => this.setState({ value })

  render() {
    return (
      <>
        <FullWidthBackground
          backgroundColor="white"
          style={{ paddingTop: "0" }}
        >
          <ContentContainer style={{ maxWidth: "1240px" }}>
            <SectionDivider color="white">
              {" "}
              / results and takeaways
            </SectionDivider>
          </ContentContainer>
          <ContentContainer style={{ maxWidth: "1040px" }}>
            <BodyTextWithMargin>
              Having completed a successful first experiment, our small team of
              three continued to move forward with more research and discovery
              across a variety of other data-related topics. In the span of a
              few months we were able to conduct three additional experiments
              around data.
              <br />
              <br />
              We conducted each additional experiment with a round of research
              and quick, lightweight designs (see below). We cycled through
              questions around meeting data, presentation data, more detailed
              account data, and more. Each experiment gave us a clearer
              understanding of what our users were looking for and we gained a
              lot of insight in a very short amount of time using this
              experimental methodology.
            </BodyTextWithMargin>
          </ContentContainer>
        </FullWidthBackground>
        <FullWidthBackground
          backgroundColor="whitePinkTint"
          style={{ paddingTop: "0" }}
        >
          <ContentContainer style={{ maxWidth: "1220px" }}>
            <CarouselContainer>
              <Carousel
                infinite
                value={this.state.value}
                onChange={this.onChange}
                arrows
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
                <img src={carouselImage2} alt="" />
                <img src={carouselImage1} alt="" />
                <img src={carouselImage3} alt="" />
                <img src={carouselImage4} alt="" />
                <img src={carouselImage5} alt="" />
                <img src={carouselImage6} alt="" />
              </Carousel>
              <Dots number={3} value={this.state.value / 2} />
            </CarouselContainer>
          </ContentContainer>
        </FullWidthBackground>
        <FullWidthBackground backgroundColor="white">
          <ContentContainer style={{ maxWidth: "1040px" }}>
            <BodyText>
              After two quarters of working in this style, we were finding that
              while we had gained a lot of knowledge both about our users and
              about how to conduct fast and iterative experiments, we were
              unable to take further action on our learnings.
              <br />
              <br />
              Originally, the idea had been that our small team would do the
              dirty work of doing the research, gathering the user feedback, and
              understanding the technical feasability and limitations and then
              we would pass our learnings and recommendations along to one of
              Yesware’s more established engineering teams. While this sounded
              ideal in theory, we found that in practice it was too difficult of
              a process to implement.
              <br />
              <br />
              The two teams that we wanted to pass our projects along to were
              already busy with six-month roadmaps and outcomes and were unable
              to fit our suggested work into their calendars. We hadn’t planned
              how we would do the hand-off of knowledge and ultimately that led
              to a failure of movement on any further work for our experiments.
              In practice, it wasn’t feasible for a different team to be handed
              all the insights and understanding we had gained and take the
              project from there. Not only would the knowledge transfer be
              difficult, but again our ultimate problem lay in the fact that the
              other teams already had four to six months of work planned out.
              <br />
              <br />
              Sadly, our team was disbanded after two quarters and none of our
              experiments went forward in implementation. But the knowledge and
              insights gained weren’t for nothing. As a company we continue to
              go back to those research findings and rely on them as we continue
              our work. I believe as priorities shift and user needs and gaps
              remain the same, we will eventually see the work that was done on
              this team come to fruition in one way or another.
            </BodyText>
          </ContentContainer>
        </FullWidthBackground>
      </>
    )
  }
}

const CarouselContainer = styled.div`
  margin: 0 auto;
`

const BodyTextWithMargin = styled(BodyText)`
  margin-top: 30px;

  ${breakpoint("tablet")`
    margin-top: 60px;
  `}
`

export default TheExperiment
