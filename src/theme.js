import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f2d357',
            contrastText: '#1d2c38'
        },
        secondary: {
            main: '#d2faf7'
        },
        background: {
            default: '#fff',
            dark: '#1d2c38'
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

export default theme;