import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  :root {
    --highlight-color: white;
    --highlight-index: 5;
  }
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  button {
    cursor: pointer;
  }
  * {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  .codex-editor__redactor {
    padding-bottom:0px !important;
  }

  #editer {
    height:495px;
    overflow-y:auto;

    .ce-block__content {
      max-width:650px;
      margin:0 auto;
    }

    h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  h3 {
    font-size: 1.17em;
  }

  h4 {
  }

  h5 {
    font-size: 0.83em;
  }

  h6 {
    font-size: 0.67em;
  }
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  min-width: 1480px;
`;

export const GlobalBody = styled.div`
  flex: 1;
  background-color: #f6f6f6;
  padding-right: 40px;
  padding-left: 20px;
  box-sizing: border-box;
`;

export const GlobalInnerBody = styled.div`
  min-width: 635px;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.25);
  .highlight {
    background-color: var(--highlight-color);
    z-index: var(--highlight-index);
  }
`;
