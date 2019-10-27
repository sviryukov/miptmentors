import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Box, List} from '@material-ui/core';
import DrawerItem from "./DrawerListItem";

const useStyles = makeStyles(theme => ({
    drawerContainer: {
        width: '100%',
        height: 'calc(100% - 121px)',
        position: 'absolute',
        top: '121px',
        overflow: 'hidden',
        transition: 'z-index 0.4s'
    },
    drawer: {
        width: '100%',
        padding: '0px',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        transition: 'left 0.4s'
    },
    drawerList: {
        padding: '0px'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Box className={classes.drawerContainer} style={{
            zIndex: props.drawerOpen ? '10' : '-1'
        }}>
            <Box className={classes.drawer}
                 style={{
                     left: props.drawerOpen ? '0%' : '100%'
                 }}>
                <List className={classes.drawerList}>
                    <DrawerItem text='Новости проекта' href='/news'/>
                    <DrawerItem text='Менторы проекта' href='/mentors'/>
                    <DrawerItem text='Найти ментора' href='#'/>
                    <DrawerItem text='Стать ментором' href='#'/>
                    <DrawerItem text='Контакты' href='/contacts'/>
                </List>
            </Box>
        </Box>
    );
};