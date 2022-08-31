import { Home } from "./pages/Home";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    background-color:#0E1218;
    color: #F1F1F1;
    font-family: 'Prompt', sans-serif;
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
