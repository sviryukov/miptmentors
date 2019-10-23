import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles({
    footerMenuButton: {
        display: 'flex',
        width: 'fit-content',
        marginRight: '16px',
        marginBottom: '16px',
        textTransform: 'uppercase'
    }
});

export default props => {
    const classes = useStyles();
    return (
        <Button className={classes.footerMenuButton}
                color='secondary'
                variant='outlined'
                href={props.href}>
            {props.text}
        </Button>
    );
}