import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Hidden} from '@material-ui/core';
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
    const [open, setOpen] = useState(false);
    const toggleDrawer = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };
    return (
        <React.Fragment>
            <Grid container className={classes.container}>
                <TopBar/>
                <Logo/>
                <Menu handleClick={toggleDrawer(true)}/>
            </Grid>
            <Hidden mdUp>
                <Drawer open={open} handleOnClose={toggleDrawer(false)}/>
            </Hidden>
        </React.Fragment>
    );
};