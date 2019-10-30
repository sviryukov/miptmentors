import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMenuHeader: {
        height: '104px',
        padding: '30px 0px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    },
    footerMenuLink: {
        display: 'block',
        paddingBottom: '15px',
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box display={{xs: 'block', sm: 'none'}}
                 component={Link} href={'/'}
                 className={classes.footerMenuHeader}>
                Клуб Менторов Физтех-Союза
            </Box>
            <Box display={{xs: 'none', sm: 'block'}}
                 component={Link} href={'/'}
                 className={classes.footerMenuHeader}>
                Клуб Менторов<br/>Физтех-Союза
            </Box>
            <Box component={Link} href={'/news'}
                 className={classes.footerMenuLink}>
                Новости проекта
            </Box>
            <Box component={Link} href={'/mentors'}
                 className={classes.footerMenuLink}>
                Менторы проекта
            </Box>
            <Box component={Link} href={'/contacts'}
                 className={classes.footerMenuLink}>
                Контакты
            </Box>
            <Box component={Link} href={'http://phystechunion.org'} target='_blanc'
                 className={classes.footerMenuLink}>
                Физтех-Союз
            </Box>
        </React.Fragment>
    );
}