import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from "@material-ui/core";
import {Email, Phone, OpenInNew} from "@material-ui/icons";
import ContactsTextLink from "./ContactsTextLink";

const useStyles = makeStyles(theme => ({
    contactsText: {
        height: '185px',
        padding: '40px 20px 0px',
        [theme.breakpoints.up('sm')]: {
            padding: '40px 140px 0px'
        },
        [theme.breakpoints.up('md')]: {
            height: '440px',
            padding: '140px 81px'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '140px 100px'
        }
    },
    contactsTextSocialIcon: {
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.primary.main
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid component={Box} display={{xs: 'none', md: 'flex'}}
              container
              item xs={12} md={5} lg={4} xl={3}
              className={classes.contactsText}>
            <ContactsTextLink href='mailto:sviryukov.k@phystech.edu' text='sviryukov.k@phystech.edu' icon={Email}/>
            <ContactsTextLink href='tel:+79250479358' text='+7 (925) 047-93-58' icon={Phone}/>
            <ContactsTextLink href='http://phystechunion.org' text='Физтех-Союз' icon={OpenInNew}/>
        </Grid>
    );
};