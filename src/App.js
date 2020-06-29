import React, { Component } from "react"
import styled from "styled-components"
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
import UnderstandingCoreUsers from "./pages/UnderstandingCoreUsers"
import WorkStuff from "./pages/WorkStuff"

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
            <SiteHeader />
            <Main>
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
                  path="/projects/core-users"
                  component={UnderstandingCoreUsers}
                />
                <Redirect to="/" />
              </Switch>
            </Main>
            <SiteFooter />
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

const Main = styled.main``

export default App
