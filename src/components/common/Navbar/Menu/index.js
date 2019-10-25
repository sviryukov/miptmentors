import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, List, Box} from '@material-ui/core';
import MenuItem from "./MenuItem";
import MenuSignIn from "./MenuSignIn";
import MenuOpenDrawer from "./MenuOpenDrawer";
import MenuJoin from "./MenuJoin";

const useStyles = makeStyles(theme => ({
    menuContainer: {
        width: 'calc(100% - 195px)',
        [theme.breakpoints.up('xl')]: {
            width: 'calc(100% - 207px)'
        }
    },
    menuList: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '0px',
        alignItems: 'center'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid item className={classes.menuContainer}>
            <List component={Box} className={classes.menuList} display={{ xs: 'none', md: 'flex'}}>
                <MenuItem text='Новости проекта' href='/news' id='news'/>
                <MenuItem text='Менторы проекта' href='/mentors' id='mentors'/>
                <MenuItem text='Контакты' href='/contacts' id='contacts'/>
                <MenuJoin/>
                <MenuSignIn/>
            </List>
            <List component={Box} className={classes.menuList} display={{ xs: 'flex', md: 'none'}}>
                <MenuOpenDrawer handleClick={props.handleClick}/>
            </List>
        </Grid>
    );
};