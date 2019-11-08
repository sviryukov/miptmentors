import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles({
    homePartnerItem: {
        height: 'fit-content',
        textAlign: 'center'
    },
    homePartnerItemImg: {
        height: '176px'
    }
});

const HomePartnerItem = props => {
    const classes = useStyles();
    return (
        <Grid component={Link} href={props.href} target='_blank'
              item className={classes.gomePartnerItem}>
            <img src={props.img} alt={props.alt} className={classes.homePartnerItemImg}/>
        </Grid>
    );
};

export {HomePartnerItem};