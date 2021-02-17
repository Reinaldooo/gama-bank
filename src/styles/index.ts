import { createGlobalStyle } from "styled-components";

export const mainPurple: string = "#8c52e5";
export const mainGreen: string = "#68de5a";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background: ${mainPurple};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}

button {
  cursor: pointer;
}
`;
