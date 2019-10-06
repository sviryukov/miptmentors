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
        text: {
            light: '#fff',
            link: '#1976d2'
        }
    }
});

theme.typography.h2 = {
    fontSize: '22px',
    fontWeight: 'normal',
    [theme.breakpoints.up('sm')]: {
        fontSize: '33px'
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