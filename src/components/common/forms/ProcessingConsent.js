import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, FormControlLabel, Checkbox, Link, Typography} from '@material-ui/core';
import theme from "../../../theme";

let useStyles = makeStyles({
    processingConsent: {
        marginTop: '32px',
        marginBottom: '8px'
    },
    processingConsentLink: {
        textDecoration: 'underline',
        fontSize: '16px'
    }
});

const ProcessingConsent = props => {
    const classes = useStyles();
    return (
        <Box className={classes.processingConsent}>
            <FormControlLabel control={
                                  <Checkbox style={props.error ? {color: theme.palette.error.main} : {}}/>
                              }
                              label={
                                  <Typography style={props.error ? {color: theme.palette.error.main} : {}}>
                                      Согласен(-на) на обработку персональных данных
                                      {props.required ? " *" : ""}
                                  </Typography>
                              }
                              checked={props.value}
                              onChange={event => props.handleChange(event.target.checked)}/>
            <br/>
            <br/>
            <Link href='https://phystech-union.org/wp-content/uploads/2019/08/Confidential_p-u.pdf' target='_blank'
                  className={classes.processingConsentLink}>
                Политика конфиденциальности
            </Link>
        </Box>
    );
};

export {ProcessingConsent};