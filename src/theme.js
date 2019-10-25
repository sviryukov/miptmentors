import { createMuiTheme } from '@material-ui/core/styles';

// noinspection JSCheckFunctionSignatures
let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#22252d'
        },
        secondary: {
            main: '#f2d357'
        },
        text: {
            light: '#fff',
            link: '#1976d2'
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