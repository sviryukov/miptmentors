import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import newsTags from './newsTags';

const useStyles = makeStyles(theme => ({
    newsNavbarContainer: {
        padding: '0px 8px'
    },
    newsNavbar: {
        paddingBottom: '40px',
        borderTop: '2px solid ' + theme.palette.text.primary
    },
    newsNavbarItem: {
        padding: '10px 20px 0px 0px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color 0.3s'
    },
    newsNavbarItemChosen: {
        padding: '10px 20px 0px 0px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'color 0.3s',
        color: theme.palette.secondary.main
    }
}));

const NewsNavbar = props => {
    const classes = useStyles();
    const [navbarChosenTag, setNavbarChosenTag] = useState('all');
    const handleClick = newTag => {
        setNavbarChosenTag(newTag);
        props.setTag(newTag);
    };
    return (
        <Grid container item xs={12} sm={8} className={classes.newsNavbarContainer}>
            <Grid item xs={12} container className={classes.newsNavbar}>
                <Grid item
                      className={navbarChosenTag === 'all' ? classes.newsNavbarItemChosen : classes.newsNavbarItem}
                      onClick={() => handleClick('all')}>
                    Все новости
                </Grid>
                {Object.keys(newsTags).map(tag => (
                    <Grid key={tag} item
                          className={navbarChosenTag === tag ? classes.newsNavbarItemChosen : classes.newsNavbarItem}
                          onClick={() => handleClick(tag)}>
                        {newsTags[tag].name}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export {NewsNavbar};