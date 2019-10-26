import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid} from '@material-ui/core';
import TopBar from './TopBar';
import Logo from './Logo';
import Menu from './Menu';
import Drawer from './Drawer';

const useStyles = makeStyles({
    container: {
        padding: '0px',
        borderBottom: '1px solid #dadada',
        backgroundColor: '#fff'
    }
});

export default () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        document.body.style.overflowY = open ? 'hidden' : 'visible';
        setDrawerOpen(open);
    };
    return (
        <React.Fragment>
            <Drawer drawerOpen={drawerOpen}/>
            <Grid container className={classes.container}>
                <TopBar/>
                <Logo/>
                <Menu handleDrawerOpenClick={toggleDrawer(true)}
                      handleDrawerCloseClick={toggleDrawer(false)}
                      drawerOpen={drawerOpen}/>
            </Grid>
        </React.Fragment>
    );
};