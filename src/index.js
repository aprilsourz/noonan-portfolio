import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

// @TODO replace with museo sans
import "./fonts/Raleway-Regular.ttf"
import "./fonts/Raleway-ExtraBold.ttf"
import "./fonts/Raleway-Italic.ttf"
import "./fonts/Raleway-Light.ttf"
import "./fonts/Raleway-SemiBold.ttf"

import "./index.css"

// @TODO Should we leave the service worker?
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
