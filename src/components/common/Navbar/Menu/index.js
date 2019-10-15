import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, List, Box} from '@material-ui/core';
import MenuItem from "./MenuItem";
import MenuSignIn from "./MenuSignIn";
import MenuOpenDrawer from "./MenuOpenDrawer";

const useStyles = makeStyles(theme => ({
    menuContainer: {
        position: 'relative',
        top: '-100px',
        transition: 'top 0.5s 0.3s',
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
    const menuContainer = useRef(null);
    useEffect(() => {
        menuContainer.current.style.top = '0px';
    });
    return (
        <Grid item className={classes.menuContainer} ref={menuContainer}>
            <List component={Box} className={classes.list} display={{ xs: 'none', md: 'flex'}}>
                <MenuItem text='Новости проекта' href='/news' id='news'/>
                <MenuItem text='Менторы проекта' href='/mentors' id='mentors'/>
                <MenuItem text='Контакты' href='/contacts' id='contacts'/>
                <MenuSignIn/>
            </List>
            <List component={Box} className={classes.list} display={{ xs: 'flex', md: 'none'}}>
                <MenuOpenDrawer handleClick={props.handleClick}/>
            </List>
        </Grid>
    );
};