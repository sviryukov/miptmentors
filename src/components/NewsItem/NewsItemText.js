import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    newsItemText: {
        paddingTop: "20px",
        fontSize: '16px'
    }
});

const NewsItemText = props => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              className={classes.newsItemText}>
            {props.text.split('\n').map((p, i) => (
                <React.Fragment key={i}>
                    <br/>
                    {p}
                </React.Fragment>
            ))}
        </Grid>
    );
};

export {NewsItemText};