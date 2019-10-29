import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Link} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    contactsTextLink: {
        width: 'fit-content',
        height: '55px',
        fontSize: '18px',
        color: 'inherit',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.secondary.main,
            textDecoration: 'none'
        }
    },
    contactsTextLinkIcon: {
        margin: '0px 10px'
    }
}));

export default props => {
    const classes = useStyles();
    const Icon = props.icon;
    return (
        <React.Fragment>
            <Grid component={Link} href={props.href} target='_blanc'
                  item
                  container
                  className={classes.contactsTextLink}>
                <Grid component={Icon} size='30px'
                      item
                      className={classes.contactsTextLinkIcon}/>
                <Grid item>
                    {props.text}
                </Grid>
            </Grid>
            <Grid item xs={12}/>
        </React.Fragment>
    );
};