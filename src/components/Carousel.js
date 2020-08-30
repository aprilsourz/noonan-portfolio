import { withSize } from "react-sizeme"
import React from "react"
import BaseCarousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import theme from "../theme"

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }

  onChange = (value) => this.setState({ value })

  render() {
    const {
      children,
      size,
      slidesPerScroll,
      numberOfDots,
      ...propsForBaseCarousel
    } = this.props
    const screenWidth = size.width
    return (
      <div>
        <BaseCarousel
          value={this.state.value}
          onChange={this.onChange}
          {...propsForBaseCarousel}
          slidesPerScroll={slidesPerScroll}
          addArrowClickHandler
          arrowLeft={LeftArrow}
          arrowRight={RightArrow}
          breakpoints={{
            757: {
              arrowLeft: null,
              arrowRight: null,
              slidesPerScroll: 1,
              slidesPerPage: 1,
            },
          }}
        >
          {children}
        </BaseCarousel>
        <Dots
          number={screenWidth > 737 ? numberOfDots : children.length}
          value={
            screenWidth > 737
              ? this.state.value / slidesPerScroll
              : this.state.value
          }
        />
      </div>
    )
  }
}

const LeftArrow = (
  <button
    style={{ backgroundColor: theme.colors.purple }}
    className="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft"
  >
    <span>prev</span>
  </button>
)

const RightArrow = (
  <button
    className="BrainhubCarousel__arrows BrainhubCarousel__arrowRight"
    style={{ backgroundColor: theme.colors.purple }}
  >
    <span>next</span>
  </button>
)

export default withSize()(Carousel)
