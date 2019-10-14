import React from 'react';
import {Grid, Box, List} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import MenuItem from "./item";
import MenuSignIn from "./signin";
import MenuOpenDrawer from "./open-drawer";

const useStyles = makeStyles(theme => ({
    container: {
        width: 'calc(100% - 195px)',
        [theme.breakpoints.up('xl')]: {
            width: 'calc(100% - 207px)'
        }
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '0px',
        alignItems: 'center'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid item className={classes.container}>
            <Box component={List} className={classes.list} display={{ xs: 'none', md: 'flex'}}>
                <MenuItem text='Новости проекта' href='/news' id='news'/>
                <MenuItem text='Менторы проекта' href='/mentors' id='mentors'/>
                <MenuItem text='Контакты' href='/contacts' id='contacts'/>
                <MenuSignIn/>
            </Box>
            <Box component={List} className={classes.list} display={{ xs: 'flex', md: 'none'}}>
                <MenuOpenDrawer handleClick={props.handleClick}/>
            </Box>
        </Grid>
    );
};