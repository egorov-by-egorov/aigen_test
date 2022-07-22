import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface TypeText {
        hint: string;
    }
}

export const theme = createTheme( {
    palette: {
        primary: {
            light: '#ffdb66',
            main: '#ffc300',
            dark: '#f0b700',
            contrastText: '#fff'
        },
        secondary: {
            light: '#a3a1aa',
            main: '#84828E',
            dark: '#777580',
            contrastText: '#fff'
        },
        error: {
            light: '#e5665a',
            main: '#df4031',
            dark: '#c93a2c',
            contrastText: '#fff'
        },
        warning: {
            light: '#ffdb66',
            main: '#ffc300',
            dark: '#f3ba00',
            contrastText: '#fff'
        },
        info: {
            light: '#4cb5f4',
            main: '#109cf1',
            dark: '#0e84cd',
            contrastText: '#fff'
        },
        success: {
            light: '#7ac758',
            main: '#4eb421',
            dark: '#42991c',
            contrastText: '#fff'
        },
        text: {
            primary: '#333333',
            secondary: '#848484',
            disabled: '#e0e0e0',
            hint: '#a4a4a4'
        },
        action: {
            active: '#848484',
            hover: '#c7d84b',
            selected: '#a4a4a4',
            disabled: '#e0e0e0',
            disabledBackground: '#f2f2f2'
        },
        background: {
            default: '#f8f8f8',
            paper: '#ffffff'
        },
        divider: '#e0e0e0'
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        h1: {
            fontSize: '4rem',
            fontWeight: 300
        },
        h2: {
            fontSize: '3.250rem',
            fontWeight: 300
        },
        h3: {
            fontSize: '2.750rem',
            fontWeight: 400
        },
        h4: {
            fontSize: '2rem',
            fontWeight: 500
        },
        h5: {
            fontSize: '1.500rem',
            fontWeight: 400
        },
        h6: {
            fontSize: '1.250rem',
            fontWeight: 500
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.500
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.450
        },
        button: {
            fontSize: '1rem',
            fontWeight: 600
        },
        caption: {
            fontSize: '0.770rem',
            fontWeight: 400,
            lineHeight: 1.450
        },
        subtitle1: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.500
        },
        subtitle2: {
            fontSize: '0.750rem',
            fontWeight: 400,
            lineHeight: 1.500
        },
        overline: {
            fontSize: '0.625rem',
            fontWeight: 400,
            textTransform: 'uppercase',
            lineHeight: 1.750
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    textTransform: 'none'
                },
                contained: {

                    whiteSpace: 'nowrap'
                }
            }
        }
    }
} );

export default theme;
