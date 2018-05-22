import * as React from 'react';
import { injectGlobal } from 'react-emotion';

injectGlobal`

@font-face {
  font-family: 'Streamster';
  src: url('/static/fonts/streamster-webfont.woff');
  src: url('/static/fonts/streamster-webfont.woff2');
  font-weight: 300;
  font-style: normal;
  font-stretch: normal
}

  html, body {
    margin: 0;
  }
`;
