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

export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.newsCardImgContainer}>
            <img src={props.image} className={classes.newsCardImg}/>
        </div>
    );
}