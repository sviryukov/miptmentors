import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0a1829',
            lighter: '#0f233b'
        },
        secondary: {
            main: '#f2d357'
        },
        text: {
            light: '#fff',
            link: '#1976d2'
        }
    }
});

theme.typography.h1 = {
    fontSize: '24px',
    fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px'
    }
};

export default theme;