import { Home } from "./pages/Home";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0E1218;
    color: #fff;
    font-family: 'Prompt', sans-serif;
    font-weight: 400;
  }
`

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  )
}

export default App
