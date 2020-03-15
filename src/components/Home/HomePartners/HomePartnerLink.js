import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePartnerLink: {
        height: 'fit-content',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: '16px'
        }
    },
    homePartnerLinkImg: {
        height: '176px'
    }
}));

const HomePartnerLink = props => {
    const classes = useStyles();
    return (
        <Grid component={Link} href={props.href} target='_blank'
              item className={classes.homePartnerLink}>
            <img src={props.img} alt={props.alt} className={classes.homePartnerLinkImg}/>
        </Grid>
    );
};

export {HomePartnerLink};