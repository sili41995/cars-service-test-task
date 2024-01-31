import { Global, css } from '@emotion/react';
import 'modern-normalize';
import {
  manropeMedium,
  manropeRegular,
  manropeSemiBold,
  montserratRegular,
  montserratSemiBold,
} from 'fonts';
import { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FontFamilyNames } from 'constants/index';

const GlobalStyles: FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: ${FontFamilyNames.manrope};
        src: local(${FontFamilyNames.manrope}),
          url(${manropeMedium}) format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: ${FontFamilyNames.manrope};
        src: local(${FontFamilyNames.manrope}),
          url(${manropeRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${FontFamilyNames.manrope};
        src: local(${FontFamilyNames.manrope}),
          url(${manropeSemiBold}) format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratRegular}) format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: ${FontFamilyNames.montserrat};
        src: local(${FontFamilyNames.montserrat}),
          url(${montserratSemiBold}) format('truetype');
        font-weight: 600;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: scroll;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin: 0;
      }

      ul,
      ol {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      img {
        display: block;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }

      button {
        cursor: pointer;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
