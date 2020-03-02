import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Chip} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    newsImgContainer: {
        width: '100%',
        position: 'relative',
        paddingTop: '66.6%'
    },
    newsImg: {
        position: 'absolute',
        width: '100%',
        height: 'auto',
        top: '0',
        left: '0'
    },
    newsTag: {
        position: 'absolute',
        left: '16px',
        bottom: '16px',
        color: theme.palette.text.light,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
}));

const NewsImg = props => {
    const classes = useStyles();
    const newsTags = {
        "event": {
            "name": "Мероприятия",
            "color": "#1976d2"
        },
        "meeting": {
            "name": "Встречи",
            "color": "#dc004e"
        },
        "feedback": {
            "name": "отзывы",
            "color": "#9c27b0"
        }
    };
    return (
        <div className={classes.newsImgContainer}>
            <img src={'/img/' + props.image} className={classes.newsImg} alt={props.alt}/>
            <Chip label={newsTags[props.tag].name}
                  style={{backgroundColor: newsTags[props.tag].color}}
                  className={classes.newsTag}/>
        </div>
    );
};

export {NewsImg};