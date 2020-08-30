import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Home from "./pages/Home"
import FunStuff from "./pages/FunStuff"
import DecreasingUserExperienceFriction from "./pages/DecreasingUserExperienceFriction"
import MakingDataDrivenDecisions from "./pages/MakingDataDrivenDecisions"
import SurfacingDataAndInsights from "./pages/SurfacingDataAndInsights"
import WorkStuff from "./pages/WorkStuff"

import ScrollToTop from "./components/ScrollToTop"
import SiteFooter from "./components/SiteFooter"
import SiteHeader from "./components/SiteHeader"
import theme from "./theme"

class App extends Component {
  componentDidMount() {
    // Allow users who use the tab key to see outlines on button elements
    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // the "I am a keyboard user" key
        document.body.classList.add("user-is-tabbing")
        window.removeEventListener("keydown", handleFirstTab)
      }
    }

    window.addEventListener("keydown", handleFirstTab)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <ScrollToTop />
            <SiteHeader />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/fun-stuff" component={FunStuff} />
                <Route exact path="/work-stuff" component={WorkStuff} />
                <Route
                  exact
                  path="/projects/decreasing-friction"
                  component={DecreasingUserExperienceFriction}
                />
                <Route
                  exact
                  path="/projects/data-driven-decisions"
                  component={MakingDataDrivenDecisions}
                />
                <Route
                  exact
                  path="/projects/surfacing-data-and-insights"
                  component={SurfacingDataAndInsights}
                />
                <Redirect to="/" />
              </Switch>
            </main>
            <SiteFooter />
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
