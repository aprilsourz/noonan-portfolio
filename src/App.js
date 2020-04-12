import React from "react"
import styled from "styled-components"

const TestComponent = styled.div`
  color: ${({ theme }) => theme.colors.pink};
`
function App() {
  return <TestComponent className="App">Hello World</TestComponent>
}

export default App
