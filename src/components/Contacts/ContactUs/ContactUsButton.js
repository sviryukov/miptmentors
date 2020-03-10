import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Button} from '@material-ui/core';

let useStyles = makeStyles({
    contactUsButton: {
        marginTop: "20px"
    }
});

const ContactUsButton = () => {
    const classes = useStyles();
    return (
        <Button variant="contained"
                size="large"
                color="primary"
                className={classes.contactUsButton}>
            Отправить
        </Button>
    );
};

export {ContactUsButton};