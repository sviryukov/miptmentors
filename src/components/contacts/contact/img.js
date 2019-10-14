import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";

let useStyles = makeStyles({
    imgContainer: {
        width: '100%',
        marginBottom: '40px',
        borderRadius: '50%',
        overflow: 'hidden',
        fontSize: '0px'
    },
    img: {
        width: '100%'
    }
});

export default (props) => {
    const classes = useStyles();
    return (
        <Box boxShadow={3} className={classes.imgContainer}>
            <img className={classes.img} src={'/img/' + props.img}/>
        </Box>
    );
};