import React, {useState} from 'react';
import {Grid, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Logo from './logo';
import Menu from './menu';
import Drawer from './drawer';

const useStyles = makeStyles(theme => ({
    container: {
        padding: '0px',
        backgroundColor: theme.palette.background.dark
    }
}));

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
                <Logo/>
                <Menu handleClick={toggleDrawer(true)}/>
            </Grid>
            <Hidden mdUp>
                <Drawer open={open} handleOnClose={toggleDrawer(false)}/>
            </Hidden>
        </React.Fragment>
    );
};