import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    phystechUnionLink: {
        display: 'block',
        width: '200px',
        marginTop: '53px',
        marginRight: 'calc(100% - 200px)',
        [theme.breakpoints.up('md')]: {
            marginRight: '0px',
            marginLeft: 'calc(100% - 200px)'
        }
    },
    phystechUnionLinkImg: {
        width: '200px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={10} md={3}>
            <Link href='https://phystech-union.org' target='_blanc' className={classes.phystechUnionLink}>
                <img src={'/img/phystechunion.svg'} alt='Физтех-Союз' className={classes.phystechUnionLinkImg}/>
            </Link>
        </Grid>
    );
}