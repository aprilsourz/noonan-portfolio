import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import StyleGuide from "./pages/StyleGuide"
import theme from "./theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/style-guide" component={StyleGuide} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
