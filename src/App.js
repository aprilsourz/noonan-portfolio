import React from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import StyleGuide from "./pages/StyleGuide"
import SiteHeader from "./components/SiteHeader"
import theme from "./theme"

function App() {
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

const Main = styled.div`
  margin-top: 115px;
`

export default App
