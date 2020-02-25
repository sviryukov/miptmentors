import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homePartnerItem: {
        height: 'fit-content',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            padding: '16px'
        }
    },
    homePartnerItemImg: {
        height: '176px'
    }
}));

const HomePartnerItem = props => {
    const classes = useStyles();
    return (
        <Grid component={Link} href={props.href} target='_blank'
              item className={classes.homePartnerItem}>
            <img src={props.img} alt={props.alt} className={classes.homePartnerItemImg}/>
        </Grid>
    );
};

export {HomePartnerItem};