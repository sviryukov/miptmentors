import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Img from './img';
import Links from './links';
import SocialNetworks from './social-networks';

let useStyles = makeStyles({
    contactContainer: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        textAlign: 'center'
    },
    mounted: {
        top: '0px',
        opacity: 1
    }
});

export default (props) => {
    const classes = useStyles();
    const contactContainer = useRef(null);
    useEffect(() => {
        contactContainer.current.style.transition = 'opacity 0.5s ' + props.animation_delay + 's, top 0.5s ' + props.animation_delay + 's';
        contactContainer.current.style.opacity = 1;
        contactContainer.current.style.top = '0px';
    });
    return (
        <Grid item xs={9} sm={7} md={4} lg={3}
              className={classes.contactContainer}
              ref={contactContainer}>
            <Img img={props.img}/>
            <p><b>{props.name}</b></p>
            <p>{props.role}</p>
            <Links email={props.email}
                   phone={props.phone}/>
            <SocialNetworks vk={props.vk}
                            facebook={props.facebook}
                            telegram={props.telegram}/>
        </Grid>
    );
};