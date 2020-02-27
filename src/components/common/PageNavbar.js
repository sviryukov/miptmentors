import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    pageNavbar: {
        paddingBottom: '40px',
        borderTop: '2px solid ' + theme.palette.text.primary
    },
    pageNavbarTab: {
        padding: '10px 20px 0px 0px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color 0.3s'
    },
    pageNavbarChosenTab: {
        padding: '10px 20px 0px 0px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color 0.3s',
        color: theme.palette.secondary.main
    }
}));

const PageNavbar = props => {
    const classes = useStyles();
    const [chosenTab, setChosenTab] = useState(props.initialTab);
    const handleClick = newTab => {
        setChosenTab(newTab);
        props.setTab(newTab);
    };
    return (
        <Grid item xs={12} container>
            <Grid item xs={12} container className={classes.pageNavbar}>
                {props.tabs.map(tab => (
                    <Grid key={tab.name} item
                          className={chosenTab === tab.name ? classes.pageNavbarChosenTab : classes.pageNavbarTab}
                          onClick={() => handleClick(tab.name)}>
                        {tab.heading}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export {PageNavbar};