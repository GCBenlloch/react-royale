import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    font-family: 'Open Sans', sans-serif;
  }

  *, *:after, *:before {
    box-sizing: inherit;
    color: inherit;
    line-height: 1.4;
    font-family: inherit;
  }

  body {
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Sigmar One', cursive;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
  }
`;
