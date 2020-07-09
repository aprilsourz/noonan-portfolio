/* eslint-disable no-undef */
import React from "react"
import "./Home/index.css"
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
import keyboard from "../img/keyboard.svg"
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
  componentDidMount() {
    var originalIconsHTML = document.getElementById("icons").innerHTML
    var removeTouchingIcons = function () {
      var nameRect = document.getElementById("name").getBoundingClientRect()

      var getTouching = function (rect1, rect2) {
        return !(
          rect1.right <= rect2.left ||
          rect1.left >= rect2.right ||
          rect1.bottom <= rect2.top ||
          rect1.top >= rect2.bottom
        )
      }

      var boxes = [].slice.call(document.getElementsByClassName("box"))
      var boxElementRect = boxes.map(function (element, ix) {
        return {
          element: element,
          rect: document
            .getElementsByClassName("box")
            [ix].getBoundingClientRect(),
        }
      })

      boxElementRect.forEach(function (item) {
        var element = item.element
        var rect = item.rect

        if (getTouching(nameRect, rect)) {
          element.innerHTML = ""
        }
      })
    }

    removeTouchingIcons()

    function addTooltips() {
      tippy.setDefaults({
        animation: "fade",
        arrow: true,
        theme: "joji",
      })

      tippy(".box img", {
        content: function (reference) {
          var id = reference.getAttribute("data-template")
          var container = document.createElement("div")
          var linkedTemplate = document.getElementById(id)
          if (linkedTemplate) {
            var node = document.importNode(linkedTemplate.content, true)
            container.appendChild(node)
            return container
          } else {
            var node = document.createElement("span")
            node.innerHTML = "wait for copy!"
            container.appendChild(node)
            return container
          }
        },
      })
    }

    addTooltips()

    var addEvent = function (object, type, callback) {
      if (object == null || typeof object == "undefined") return
      if (object.addEventListener) {
        object.addEventListener(type, callback, false)
      } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback)
      } else {
        object["on" + type] = callback
      }
    }

    addEvent(window, "resize", function (event) {
      document.getElementById("icons").innerHTML = originalIconsHTML
      removeTouchingIcons()
      addTooltips()
    })
  }
  render() {
    const tooltips = tooltipContents.map((tooltip) => {
      return (
        <div className="box">
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
        <section>
          <div>
            <img id="name" src={carrieNoonan} alt="" />
          </div>
          <div id="icons" className="wrapper">
            <div className="box"></div>
            <div className="box"></div>
            {tooltips}
          </div>
        </section>
      </div>
    )
  }
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
  bike,
  mail,
  keyboard,
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

export default Home
