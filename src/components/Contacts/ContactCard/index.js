import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {FadeFromBottom} from "../../common/animations";
import ContactCardImg from './ContactCardImg';
import ContactCardLinks from './ContactCardLinks';
import ContactCardSocialNetworks from './ContactCardSocialNetworks';

let useStyles = makeStyles({
    contactContainer: {
        textAlign: 'center'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <FadeFromBottom component={Grid}
                        delay={props.animation_delay}
                        item xs={9} sm={7} md={4} lg={3}
                        className={classes.contactContainer}>
            <ContactCardImg img={props.img} name={props.name}/>
            <p><b>{props.name}</b></p>
            <p>{props.role}</p>
            <ContactCardLinks email={props.email}
                              phone={props.phone}/>
            <ContactCardSocialNetworks vk={props.vk}
                                       facebook={props.facebook}
                                       telegram={props.telegram}/>
        </FadeFromBottom>
    );
};