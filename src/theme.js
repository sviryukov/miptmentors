import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f2d357',
            dark: '#f2d357',
            contrastText: '#1d2c38'
        },
        secondary: {
            main: '#1d2c38'
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
    fontSize: '23px',
    fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        fontSize: '33px'
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '40px'
    }
};

theme.typography.h1 = {
    fontSize: '28px',
    fontWeight: 'normal',
    [theme.breakpoints.up('xl')]: {
        fontSize: '30px'
    }
};

export default theme;