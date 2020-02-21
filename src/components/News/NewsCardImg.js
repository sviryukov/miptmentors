import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Chip} from "@material-ui/core";
import newsTags from './newsTags';

const useStyles = makeStyles(theme => ({
    newsCardImgContainer: {
        position: 'relative',
        paddingTop: '66.6%'
    },
    newsCardImg: {
        position: 'absolute',
        width: '100%',
        height: 'auto',
        top: '0',
        left: '0'
    },
    newsCardTag: {
        position: 'absolute',
        left: '16px',
        bottom: '16px',
        color: theme.palette.text.light,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));

const NewsCardImg = props => {
    const classes = useStyles();
    return (
        <div className={classes.newsCardImgContainer}>
            <img src={'/img/' + props.image} className={classes.newsCardImg} alt={props.alt}/>
            <Chip label={newsTags[props.tag].name}
                  style={{backgroundColor: newsTags[props.tag].color}}
                  className={classes.newsCardTag}/>
        </div>
    );
};

export {NewsCardImg};