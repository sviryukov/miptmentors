import { createMuiTheme } from '@material-ui/core/styles';

// noinspection JSCheckFunctionSignatures
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0a1829'
        },
        secondary: {
            main: '#f2d357'
        },
        text: {
            light: '#fff',
            link: '#1976d2'
        },
        background: {
            default: '#0a1829',
        }
    },
    typography: {
        h1: {
            fontSize: '24px',
            fontWeight: 'normal',
            [theme.breakpoints.up('sm')]: {
                fontSize: '30px'
            }
        }
    }
});

export default theme;