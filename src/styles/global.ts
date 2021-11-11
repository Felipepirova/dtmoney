import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --blue: #5429cc;
    --blue-light:#6933ff;
    --green: #33cc95;
    --red: #e62e4d;
    --shape-main: #fff;
    --title: #363f5f;
    --text: #969cb3;
    --background: #f0f2f5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }

`
