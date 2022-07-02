import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Roboto",sans-serif;
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.background}
}

`