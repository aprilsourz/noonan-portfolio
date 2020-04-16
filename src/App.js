import React, { Component } from "react"
import styled from "styled-components"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { ThemeProvider } from "styled-components"

import StyleGuide from "./pages/StyleGuide"
import Home from "./pages/Home"
import WorkStuff from "./pages/WorkStuff"
import FunStuff from "./pages/FunStuff"
import Projects from "./pages/Projects"

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
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/style-guide" component={StyleGuide} />
                <Redirect to="/" />
              </Switch>
            </Main>
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

const Main = styled.main`
  /* margin-top: 130px; */
`

export default App
