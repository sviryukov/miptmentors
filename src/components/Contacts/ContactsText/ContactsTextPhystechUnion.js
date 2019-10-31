import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from "@material-ui/core";
import {OpenInNew} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    contactsTextPhystechUnion: {
        fontSize: '20px',
        fontWeight: 'bold',
        transition: 'color 0.1s',
        color: '#e5e5e5',
        '&:hover': {
            color: theme.palette.secondary.contrastText,
            textDecoration: 'none'
        }
    },
    contactsTextPhystechUnionIcon: {
        position: 'relative',
        top: '5px',
        left: '5px'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Link href='http://phystechunion.org' target='_blank'
              className={classes.contactsTextPhystechUnion}>
            Физтех-Союз
            <OpenInNew className={classes.contactsTextPhystechUnionIcon}/>
        </Link>
    );
};