import { createMuiTheme } from '@material-ui/core/styles';

// noinspection JSCheckFunctionSignatures
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#236267'
        },
        secondary: {
            main: '#009c9c',
            light: '#00c3c3',
            contrastText: '#fff'
        },
        text: {
            light: '#fff'
        },
        background: {
            default: '#f7f7f7'
        }
    },
    typography: {
        h1: {
            fontSize: '34px',
            fontWeight: '100',
            '@media (min-width: 600px)': {
                fontSize: '40px'
            }
        }
    }
});

export default theme;