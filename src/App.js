import React, { Component } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import StyleGuide from "./pages/StyleGuide"
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
                <Route exact path="/style-guide" component={StyleGuide} />
              </Switch>
            </Main>
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

const Main = styled.main`
  margin-top: 115px;
`

export default App
