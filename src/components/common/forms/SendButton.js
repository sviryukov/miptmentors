import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button} from '@material-ui/core';

let useStyles = makeStyles({
    sendButtonContainer: {
        marginTop: "30px",
        textAlign: 'center'
    }
});

const SendButton = () => {
    const classes = useStyles();
    return (
        <Box className={classes.sendButtonContainer}>
            <Button variant="contained"
                    size="large"
                    color="secondary">
                Отправить
            </Button>
        </Box>
    );
};

export {SendButton};