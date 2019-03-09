import { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${props => props.theme.textColor};
        background: ${props => props.theme.backgroundColor};
        font-size: 14px;
        line-height: 1.4em;
    }

    html, body, #root {
        height: 100%;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h3 {
        font-size: 18px;
        margin: 0 0 18px;
    }
`
