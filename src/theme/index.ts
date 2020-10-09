import { Theme } from 'theme-ui'

export default {
  useLocalStorage: false,
  useColorSchemeMediaQuery: false,
  space: [0, 4, 8, 20, 32, 60, 80, 256, 512],
  fonts: {
    body: 'NHaasGroteskDSPro-55Rg',
    heading: 'inherit',
  },
  fontSizes: [32, 56],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.16,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#C1C4B7',
    hover: '#F3FF70',
    link: '#C1C4B7',
    modes: {
      default: {
        text: '#000',
        background: '#fff',
        primary: '#C1C4B7',
        link: '#C1C4B7',
        linkBody: '#C1C4B7',
      },
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#C1C4B7',
        link: '#C1C4B7',
        linkBody: '#F3FF70',
      },
    },
  },
  images: {
    project: {
      maxWidth: '100%',
    },
  },
  links: {
    body: {
      color: 'linkBody',
      cursor: 'none !important',
    },
    default: {
      variant: 'styles.a',
    },
  },
  buttons: {
    primary: {
      cursor: 'none !important',
      backgroundColor: 'background',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'link',
      borderRadius: '10px',
      color: 'link',
      display: 'block',
      mb: 3,
      width: 320,
      outline: 'none',
      transition: 'all .2s',
      '&:first-of-type': {
        mt: 4,
      },
      '&:hover': {
        backgroundColor: 'hover',
        color: 'black',
        borderColor: 'hover',
      },
    },
  },
  text: {
    projectItem: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 0,
      py: 3,
    },
  },
  styles: {
    '*': {
      boxSizing: 'border-box',
      cursor: 'none !important',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      padding: '60px 80px',
      position: 'relative',
      cursor: 'none !important',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'link',
      textDecoration: 'none',
      transition: 'color .2s',
      cursor: 'none !important',
      '&:hover': {
        color: 'hover',
      },
    },
  },
} as Theme
