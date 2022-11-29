/* eslint-disable no-undef */
import React from "react"
import "./Home/index.css"
import { withSize } from "react-sizeme"

import carrieNoonan from "../img/icons/carrienoonan.svg"
import { tooltipContents } from "./Home/tooltiptext"
import sewing from "../img/icons/sewing.svg"
import moon from "../img/icons/moon.svg"
import wand from "../img/icons/wand.svg"
import turntable from "../img/icons/turntable.svg"
import clouds from "../img/icons/clouds.svg"
import popsicle from "../img/icons/popsicle.svg"
import doughnut from "../img/icons/doughnut.svg"
import headphones from "../img/icons/headphones.svg"
import bike from "../img/icons/bike.svg"
import mail from "../img/icons/mail.svg"
import piano from "../img/icons/keyboard.svg"
import mountains from "../img/icons/mountains.svg"
import plant from "../img/icons/plant.svg"
import pizza from "../img/icons/pizza.svg"
import mug from "../img/icons/mug.svg"
import polaroid from "../img/icons/polaroid.svg"
import snowboard from "../img/icons/snowboard.svg"
import stars from "../img/icons/stars.svg"
import toast from "../img/icons/toast.svg"
import trees from "../img/icons/trees.svg"
import unicorn from "../img/icons/unicorn.svg"
import rainbow from "../img/icons/rainbow.svg"
import boston from "../img/icons/boston.svg"

class Home extends React.Component {
  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      resizeFunction(originalIconsHTML)
    )
  }

  componentDidMount() {
    let originalIconsHTML = document.getElementById("icons").innerHTML

    // hack to get the this to work on page load. I think it takes a few
    // milliseconds load all the svgs after the component mounts.
    // didn't have the time to come up with a better solution :(
    setTimeout(() => {
      removeTouchingIcons()
    }, 50)

    let addEvent = function (object, type, callback) {
      if (object == null || typeof object == "undefined") return
      if (object.addEventListener) {
        object.addEventListener(type, callback, false)
      } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback)
      } else {
        object["on" + type] = callback
      }
    }

    addEvent(window, "resize", () => resizeFunction(originalIconsHTML))
  }

  render() {
    const tooltips = tooltipContents.map((tooltip, idx) => {
      if (tooltip === "spacer") {
        return <div className="box" key={idx} />
      }

      return (
        <div className="box non-spacer" key={tooltip.id}>
          <img data-template={tooltip.id} src={imageMap[tooltip.id]} alt="" />
          <template
            dangerouslySetInnerHTML={{
              __html: tooltip.content,
            }}
            id={tooltip.id}
          />
        </div>
      )
    })

    return (
      <div className="home-page-container">
        <div>
          <img id="name" className="carrie-noonan" src={carrieNoonan} alt="" />
        </div>
        <div id="icons" className="wrapper">
          {tooltips}
        </div>
      </div>
    )
  }
}

const removeTouchingIcons = function () {
  let nameRect = document.getElementById("name").getBoundingClientRect()
  let footerRect = document
    .getElementById("site-footer")
    .getBoundingClientRect()

  let getTouchingNameIcon = function (rect1, rect2) {
    return !(
      rect1.right <= rect2.left ||
      rect1.left >= rect2.right ||
      rect1.bottom <= rect2.top ||
      rect1.top >= rect2.bottom
    )
  }

  let getTouchingFooterIcon = function (rect1, rect2) {
    return !(rect1.bottom <= rect2.top || rect1.top >= rect2.bottom)
  }

  let boxes = [].slice.call(document.getElementsByClassName("box"))
  let boxElementRect = boxes.map(function (element, ix) {
    return {
      element: element,
      rect: document.getElementsByClassName("box")[ix].getBoundingClientRect(),
    }
  })

  boxElementRect.forEach(function (item) {
    let element = item.element
    let rect = item.rect

    if (
      getTouchingNameIcon(nameRect, rect) ||
      getTouchingFooterIcon(footerRect, rect)
    ) {
      element.innerHTML = ""
    }
  })
}

const resizeFunction = (originalIconsHTML, width) => {
  if (!document.getElementById("icons")) {
    return null
  }

  document.getElementById("icons").innerHTML = originalIconsHTML
  removeTouchingIcons()
}

const imageMap = {
  sewing,
  moon,
  wand,
  turntable,
  clouds,
  popsicle,
  doughnut,
  headphones,
  biking: bike,
  mail,
  piano,
  mountains,
  plant,
  pizza,
  mug,
  polaroid,
  snowboard,
  stars,
  toast,
  trees,
  unicorn,
  rainbow,
  boston,
}

export default withSize()(Home)
