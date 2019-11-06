import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Typography, FormControlLabel, Checkbox} from '@material-ui/core';

let useStyles = makeStyles({
    findMentorFormTracks: {
        marginTop: '32px',
        marginBottom: '8px'
    },
    findMentorFormTracksHeader: {
        width: '100%',
        marginBottom: '8px'
    }
});

const FindMentorFormTracks = () => {
    const classes = useStyles();
    return (
        <Box className={classes.findMentorFormTracks}>
            <Typography className={classes.findMentorFormTracksHeader}>
                Выберите одно или несколько направлений наставничества *
            </Typography>
            <FormControlLabel control={<Checkbox/>}
                              label='Бизнес'/>
            <br/>
            <FormControlLabel control={<Checkbox/>}
                              label='Карьерное'/>
            <br/>
            <FormControlLabel control={<Checkbox/>}
                              label='Научное'/>
        </Box>
    );
};

export {FindMentorFormTracks};