export interface Theme {
    spacing: number
    backgroundColor: string
    backgroundColorInverted: string
    textColor: string
    borderColor: string
    shadowColor: string
    accentColor: string
}

export const defaultTheme: Theme = {
    spacing: 8,
    backgroundColor: '#ffffff',
    backgroundColorInverted: '#555555',
    textColor: '#555555',
    borderColor: '#dddddd',
    shadowColor: 'rgba(0, 0, 0, .15)',
    accentColor: '#f1672e'
}
