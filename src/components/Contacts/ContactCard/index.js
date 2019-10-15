import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import ContactCardImg from './ContactCardImg';
import ContactCardLinks from './ContactCardLinks';
import ContactCardSocialNetworks from './ContactCardSocialNetworks';

let useStyles = makeStyles({
    contactContainer: {
        position: 'relative',
        top: '50px',
        opacity: 0,
        textAlign: 'center'
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
            <ContactCardImg img={props.img}/>
            <p><b>{props.name}</b></p>
            <p>{props.role}</p>
            <ContactCardLinks email={props.email}
                   phone={props.phone}/>
            <ContactCardSocialNetworks vk={props.vk}
                            facebook={props.facebook}
                            telegram={props.telegram}/>
        </Grid>
    );
};