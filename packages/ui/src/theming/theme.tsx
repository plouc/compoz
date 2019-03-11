export interface Theme {
    spacing: number
    baseFontFamily: string
    monospacedFontFamily: string
    backgroundColor: string
    backgroundColorInverted: string
    textColor: string
    borderColor: string
    shadowColor: string
    accentColor: string
}

export const defaultTheme: Theme = {
    spacing: 8,
    baseFontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    monospacedFontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
    backgroundColor: '#ffffff',
    backgroundColorInverted: '#555555',
    textColor: '#555555',
    borderColor: '#dddddd',
    shadowColor: 'rgba(0, 0, 0, .15)',
    accentColor: '#f1672e'
}
