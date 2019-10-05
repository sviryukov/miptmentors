import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1d2c38'
        },
        secondary: {
            main: '#f2d357',
            contrastText: '#1d2c38'
        },
        background: {
            default: '#fff',
            dark: '#1d2c38'
        },
        text: {
            light: '#d2faf7',
            link: '#1976d2'
        }
    }
});

theme.typography.h2 = {
    fontSize: '22px',
    padding: '0px 20px',
    fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        fontSize: '33px',
        padding: '0px'
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '40px'
    }
};

theme.typography.h1 = {
    fontSize: '24px',
    fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        fontSize: '30px'
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '30px'
    }
};

export default theme;