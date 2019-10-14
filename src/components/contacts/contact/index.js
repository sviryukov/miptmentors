import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Img from './img';
import Links from './links';
import SocialNetworks from './social-networks';

let useStyles = makeStyles({
    container: {
        textAlign: 'center'
    }
});

export default (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={9} sm={7} md={4} lg={3} className={classes.container}>
            <Img img={props.img}/>
            <p><b>{props.name}</b></p>
            <p>{props.role}</p>
            <Links email={props.email} phone={props.phone}/>
            <SocialNetworks vk={props.vk} facebook={props.facebook} telegram={props.telegram}/>
        </Grid>
    );
};