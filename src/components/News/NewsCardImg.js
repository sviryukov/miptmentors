import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
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
    }
});

const NewsCardImg = props => {
    const classes = useStyles();
    return (
        <div className={classes.newsCardImgContainer}>
            <img src={'/img/' + props.image} className={classes.newsCardImg} alt={props.alt}/>
        </div>
    );
};

export {NewsCardImg};