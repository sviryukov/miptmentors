import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Button} from '@material-ui/core';

let useStyles = makeStyles({
    sendButtonContainer: {
        marginTop: "30px",
        textAlign: 'center'
    }
});

const SendButton = props => {
    const classes = useStyles();
    return (
        <Box className={classes.sendButtonContainer}>
            <Button variant="contained"
                    size="large"
                    color="primary"
                    onClick={props.handleClick}>
                Отправить
            </Button>
        </Box>
    );
};

export {SendButton};