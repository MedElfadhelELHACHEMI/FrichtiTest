import { css } from "styled-components";
import COLORS from "../constants/colors";

const APP = css`
  html {
    background: white;
    /* stylelint-disable-next-line */
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  html,
  body {
    color: ${COLORS.dark};
    font-family: "Open Sans", Helvetica, sans-serif;
  }

  body {
    height: 100%;
  }
`;

export default APP;
