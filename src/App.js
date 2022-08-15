import Header from "./components/header.js";
import Main_ from "./components/main.js";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
const Div = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #f1b641;
  height: 100vh;
  padding-top: 5vw;
  overflow: scroll;
`;

export default function App() {
  return (
    <Div>
      <Header />
      <Main_ />
      <GlobalStyle />
    </Div>
  );
}
