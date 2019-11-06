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

const PublicationConsent = () => {
    const classes = useStyles();
    const [consent, setConsent] = useState(true);
    const handleChange = event => setConsent(event.target.value);
    return (
        <Box className={classes.publicationConsent}>
            <Typography className={classes.PublicationConsentHeader}>
                Согласны ли вы на публикацию на ресурсах нашего проекта информации об успехах Вашего менторского взаимодействия?
            </Typography>
            <RadioGroup name='publication-consent'
                        value={consent}
                        onChange={handleChange}>
                <FormControlLabel control={<Radio/>}
                                  label='Согласен(-на)'
                                  value={true}/>
                <FormControlLabel control={<Radio/>}
                                  label='Не согласен(-на)'
                                  value={false}/>
            </RadioGroup>
        </Box>
    );
};

export {PublicationConsent};