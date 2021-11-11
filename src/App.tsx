import styled from "styled-components";
import "../src/styles/global.scss"

const Title = styled.h1`
  font-size: 64px;
  color: var(--blue);
`

export function App() {
  return (
    <div>
      <Title>Hello World</Title>
    </div>
  );
}
