import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Typography, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';

let useStyles = makeStyles({
    publicationConsent: {
        marginTop: '32px',
        marginBottom: '8px'
    },
    publicationConsentHeader: {
        width: '100%',
        marginBottom: '8px'
    }
});

const BecomeMentorFormMeetFreq = () => {
    const classes = useStyles();
    const [freq, setFreq] = useState('');
    const handleChange = event => setFreq(event.target.value);
    return (
        <Box className={classes.publicationConsent}>
            <Typography className={classes.PublicationConsentHeader}>
                Как часто Вы сможете встречаться с наставляемым (лично/Skype)?&nbsp;*
            </Typography>
            <RadioGroup name='meet-freq'
                        value={freq}
                        onChange={handleChange}>
                <FormControlLabel control={<Radio/>}
                                  label='Одна встреча в неделю'
                                  value='Одна встреча в неделю'/>
                <FormControlLabel control={<Radio/>}
                                  label='Одна встреча в две недели'
                                  value='Одна встреча в две недели'/>
                <FormControlLabel control={<Radio/>}
                                  label='Одна встреча в месяц'
                                  value='Одна встреча в месяц'/>
                <FormControlLabel control={<Radio/>}
                                  label='Сложно планировать, гибкий график'
                                  value='Сложно планировать, гибкий график'/>
                <FormControlLabel control={<Radio/>}
                                  label='Только почта'
                                  value='Только почта'/>
            </RadioGroup>
        </Box>
    );
};

export {BecomeMentorFormMeetFreq};