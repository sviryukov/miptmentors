import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, FormControlLabel, Checkbox} from '@material-ui/core';
import {FindMentorFormAcceleratorsLabel} from "./FindMentorFormAcceleratorsLabel";

let useStyles = makeStyles({
    findMentorFormAccelerators: {
        marginTop: '16px',
        marginBottom: '8px'
    },
    findMentorFormAcceleratorsLabel: {
        marginTop: '16px'
    }
});

const FindMentorFormAccelerators = () => {
    const classes = useStyles();
    return (
        <Box className={classes.findMentorFormAccelerators}>
            <FormControlLabel control={<Checkbox/>}
                              label={<FindMentorFormAcceleratorsLabel href='https://vk.com/start.mipt'
                                                                      program='Физтех.Старт'/>}
                              className={classes.findMentorFormAcceleratorsLabel}/>
            <br/>
            <FormControlLabel control={<Checkbox/>}
                              label={<FindMentorFormAcceleratorsLabel href='https://pha.vc/'
                                                                      program='Физтех Акселератор'/>}
                              className={classes.findMentorFormAcceleratorsLabel}/>
        </Box>
    );
};

export {FindMentorFormAccelerators};