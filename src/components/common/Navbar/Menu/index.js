import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, List, Box} from '@material-ui/core';
import MenuItem from "./MenuItem";
import MenuDrawerOpen from "./MenuDrawerOpen";
import MenuDrawerClose from "./MenuDrawerClose";

const useStyles = makeStyles(theme => ({
    menuContainer: {
        width: 'calc(100% - 179px)',
        [theme.breakpoints.up('xl')]: {
            width: 'calc(100% - 207px)'
        }
    },
    menuList: {
        justifyContent: 'flex-end',
        padding: '0px'
    },
    menuDrawerControls: {
        position: 'relative',
        height: '81px',
        justifyContent: 'flex-end',
        padding: '0px',
        overflow: 'hidden'
    }
}));

export default props => {
    const classes = useStyles();
    return (
        <Grid item className={classes.menuContainer}>
            <List component={Box} display={{xs: 'none', md: 'flex'}}
                  className={classes.menuList}>
                <MenuItem text='Новости проекта' href='/news' id='news' current={props.current === 'news'}/>
                <MenuItem text='Менторы проекта' href='/mentors' id='mentors' current={props.current === 'mentors'}/>
                <MenuItem text='Контакты' href='/contacts' id='contacts' current={props.current === 'contacts'}/>
                <MenuItem text='Найти ментора' href='/findmentor' id='findmentor' current={props.current === 'findmentor'}/>
                <MenuItem text='Стать ментором' href='/becomementor' id='becomementor' current={props.current === 'becomementor'}/>
            </List>
            <Box display={{xs: 'flex', md: 'none'}}
                 className={classes.menuDrawerControls}>
                <MenuDrawerOpen handleDrawerOpenClick={props.handleDrawerOpenClick}
                                drawerOpen={props.drawerOpen}/>
                <MenuDrawerClose handleDrawerCloseClick={props.handleDrawerCloseClick}
                                 drawerOpen={props.drawerOpen}/>
            </Box>
        </Grid>
    );
};