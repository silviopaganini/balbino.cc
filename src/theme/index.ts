import { Theme } from 'theme-ui'

export default {
  useLocalStorage: false,
  useColorSchemeMediaQuery: false,
  space: [0, 4, 8, 20, 32, 60, 80, 256, 512],
  fonts: {
    body: 'NHaasGroteskDSPro-55Rg',
    heading: 'inherit',
  },
  breakpoints: ['38em', '60em', '64em'],
  fontSizes: [16, 20, 24, 32, 44, '6vmin', '8vmin'],
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
    primary: '#000',
    hover: '#F3FF70',
    link: '#C1C4B7',
    modes: {
      default: {
        text: '#000',
        background: '#fff',
        primary: '#000',
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
      cursor: 'url("/cursor.svg"), auto',
    },
    default: {
      variant: 'styles.a',
    },
  },
  buttons: {
    primary: {
      cursor: 'url("/cursor.svg"), auto',
      backgroundColor: 'background',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'link',
      borderRadius: '10px',
      color: 'link',
      display: 'block',
      mb: [2, 2, 3],
      width: 320,
      outline: 'none',
      transition: 'all .2s',
      '&:first-of-type': {
        mt: [2, 2, 4],
      },
      mx: ['auto', 'auto', 0],
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
      fontSize: [3, 3, 4],
      '@media screen and (max-height: 600px)': {
        fontSize: 1,
      },
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: [0, 2, 3],
      py: [2, 2, 3],
    },
    heading: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
  },
  styles: {
    '*': {
      boxSizing: 'border-box',
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      padding: [3, 3, '60px 80px'],
      position: 'relative',
      cursor: 'url("/cursor.svg"), auto',
    },
    hr: {
      border: '0px',
      bg: 'black',
      height: '2px',
      width: 'calc(100% + 160px)',
      mx: '-80px',
      my: '6vmin',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [5, 6],
      display: ['none', 'none', 'block'],
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [0, 1, 1],
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      transition: 'color .2s',
      cursor: 'url("/cursor.svg"), auto',
      '&:hover': {
        color: 'hover',
      },
    },
  },
} as Theme
