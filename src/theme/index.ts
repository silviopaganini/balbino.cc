export default {
    space: [0, 4, 8, 16, 32, 60, 80, 256, 512],
    fonts: {
        body:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: 'inherit',
    },
    fontSizes: [22, 56],
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
    },
    text: {
        projectItem: {
            color: 'text',
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
            fontSize: 1,
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
            padding: '60px 80px',
            position: 'relative',
            minHeight: 'calc(100vh - 120px)',
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
            color: 'primary',
        },
    },
}
