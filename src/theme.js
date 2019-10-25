import { createMuiTheme } from '@material-ui/core/styles';

// noinspection JSCheckFunctionSignatures
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#116149'
        },
        secondary: {
            main: '#13aa52'
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