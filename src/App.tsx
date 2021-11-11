import styled from "styled-components";
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
  font-size: 64px;
  color: var(--blue);
`

export function App() {
  return (
    <div>
      <GlobalStyle/>
      <Title>Hello World</Title>
    </div>
  );
} 
