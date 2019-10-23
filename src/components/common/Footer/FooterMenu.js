import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Box, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footerMenuLink: {
        color: theme.palette.text.light
    },
    footerMenuListBold: {
        fontWeight: 'bold'
    },
    footerMenuList: {
        marginTop: '20px',
        marginBottom: '20px'
    },
    footerMenuCopyright: {
        marginTop: '50px',
        color: theme.palette.text.light
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.footerMenuListBold}>
                <Link href='tel:+79250479358' className={classes.footerMenuLink}>
                    +7 (925) 047-93-58
                </Link>
                <br/>
                <Link href='mailto:sviryukov.k@phystech.edu' className={classes.footerMenuLink}>
                    sviryukov.k@phystech.edu
                </Link>
            </Box>
            <Box className={classes.footerMenuList}>
                <Link href='/news' className={classes.footerMenuLink}>
                    Новости проекта
                </Link>
                <br/>
                <Link href='/mentors' className={classes.footerMenuLink}>
                    Менторы проекта
                </Link>
                <br/>
                <Link href='/contacts' className={classes.footerMenuLink}>
                    Контакты
                </Link>
                <br/>
                <Link href='/signin' className={classes.footerMenuLink}>
                    Войти
                </Link>
            </Box>
            <Box className={classes.footerMenuListBold}>
                <Link href='#' className={classes.footerMenuLink}>
                    Найти ментора
                </Link>
                <br/>
                <Link href='#' className={classes.footerMenuLink}>
                    Стать ментором
                </Link>
            </Box>
            <Box className={classes.footerMenuCopyright}>
                © 2019 Физтех-Союз
            </Box>
        </React.Fragment>
    );
}