import { createMuiTheme } from '@material-ui/core/styles';

// noinspection JSCheckFunctionSignatures
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#42494f'
        },
        secondary: {
            main: '#13aa52',
            dark: '#116149'
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
            fontSize: '24px',
            fontWeight: 'normal',
            '@media (min-width: 600px)': {
                fontSize: '30px'
            }
        }
    }
});

export default theme;