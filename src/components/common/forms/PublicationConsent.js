import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, Typography, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import theme from "../../../theme";

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

const PublicationConsent = props => {
    const classes = useStyles();
    return (
        <Box className={classes.publicationConsent}>
            <Typography className={classes.PublicationConsentHeader}>
                Согласны ли вы на публикацию на ресурсах нашего проекта информации об успехах Вашего менторского взаимодействия?
                {props.required ? " *" : ""}
            </Typography>
            <RadioGroup name='publication-consent'
                        value={props.value}
                        onChange={event => props.handleChange(event.target.value)}>
                <FormControlLabel control={
                                      <Radio style={props.error ? {color: theme.palette.error.main} : {}}/>
                                  }
                                  label={
                                      <Typography style={props.error ? {color: theme.palette.error.main} : {}}>
                                          Согласен(-на)
                                      </Typography>
                                  }
                                  value={true}/>
                <FormControlLabel control={
                                      <Radio style={props.error ? {color: theme.palette.error.main} : {}}/>
                                  }
                                  label={
                                      <Typography style={props.error ? {color: theme.palette.error.main} : {}}>
                                          Не согласен(-на)
                                      </Typography>
                                  }
                                  value={false}/>
            </RadioGroup>
        </Box>
    );
};

export {PublicationConsent};