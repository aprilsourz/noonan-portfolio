/* eslint-disable no-undef */
import React from "react"
import "./Home/index.css"
import { withSize } from "react-sizeme"

import carrieNoonan from "../img/carrienoonan.svg"
import { tooltipContents } from "./Home/tooltiptext"
import sewing from "../img/sewing.svg"
import moon from "../img/moon.svg"
import wand from "../img/wand.svg"
import turntable from "../img/turntable.svg"
import clouds from "../img/clouds.svg"
import popsicle from "../img/popsicle.svg"
import doughnut from "../img/doughnut.svg"
import headphones from "../img/headphones.svg"
import bike from "../img/bike.svg"
import mail from "../img/mail.svg"
import piano from "../img/keyboard.svg"
import mountains from "../img/mountains.svg"
import plant from "../img/plant.svg"
import pizza from "../img/pizza.svg"
import mug from "../img/mug.svg"
import polaroid from "../img/polaroid.svg"
import snowboard from "../img/snowboard.svg"
import stars from "../img/stars.svg"
import toast from "../img/toast.svg"
import trees from "../img/trees.svg"
import unicorn from "../img/unicorn.svg"
import rainbow from "../img/rainbow.svg"
import boston from "../img/boston.svg"

class Home extends React.Component {
  componentWillUnmount() {
    window.removeEventListener("resize", () =>
      resizeFunction(originalIconsHTML)
    )
  }

  componentDidMount() {
    const width = this.props.width
    let originalIconsHTML = document.getElementById("icons").innerHTML

    // don't activate the tooltips on tablet size and smaller
    if (width < 768) {
      addTooltips()
    }

    // hack to get the this to work on page load. I think it takes a few
    // milliseconds load all the svgs after the component mounts.
    // didn't have the time to come up with a better solution :(
    setTimeout(20, removeTouchingIcons())

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
    const { width } = this.props.size
    const tooltips = tooltipContents.map((tooltip, idx) => {
      if (tooltip === "spacer") {
        return <div className="box" key={idx} />
      }

      return (
        <div className="box" key={tooltip.id}>
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

  let getTouching = function (rect1, rect2) {
    return !(
      rect1.right <= rect2.left ||
      rect1.left >= rect2.right ||
      rect1.bottom <= rect2.top ||
      rect1.top >= rect2.bottom
    )
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

    if (getTouching(nameRect, rect)) {
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

  addTooltips()
}

const addTooltips = () => {
  tippy.setDefaults({
    animation: "fade",
    arrow: true,
    theme: "joji",
  })

  tippy(".box img", {
    content: function (reference) {
      let id = reference.getAttribute("data-template")
      let container = document.createElement("div")
      let linkedTemplate = document.getElementById(id)
      if (linkedTemplate) {
        let node = document.importNode(linkedTemplate.content, true)
        container.appendChild(node)
        return container
      } else {
        let node = document.createElement("span")
        node.innerHTML = "wait for copy!"
        container.appendChild(node)
        return container
      }
    },
  })
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
