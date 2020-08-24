import styled from "styled-components"
import React from "react"
import BaseCarousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import theme from "../theme"

const Carousel = ({ children, ...props }) => {
  return (
    <BaseCarousel
      {...props}
      addArrowClickHandler
      arrowLeft={
        <button
          style={{ backgroundColor: theme.colors.purple }}
          className="BrainhubCarousel__arrows BrainhubCarousel__arrowLeft"
        >
          <span>prev</span>
        </button>
      }
      arrowRight={
        <button
          className="BrainhubCarousel__arrows BrainhubCarousel__arrowRight"
          style={{ backgroundColor: theme.colors.purple }}
        >
          <span>next</span>
        </button>
      }
      breakpoints={{
        737: {
          arrowLeft: null,
          arrowRight: null,
          slidesPerScroll: 1,
          slidesPerPage: 1,
        },
      }}
    >
      {children}
    </BaseCarousel>
  )
}

export default Carousel
