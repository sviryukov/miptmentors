import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Box, FormControlLabel, Checkbox, Link} from '@material-ui/core';

let useStyles = makeStyles({
    processingConsent: {
        marginTop: '32px',
        marginBottom: '8px'
    },
    processingConsentLink: {
        width: '100%',
        marginTop: '8px',
        textDecoration: 'underline',
        fontSize: '16px'
    }
});

const ProcessingConsent = () => {
    const classes = useStyles();
    return (
        <Box className={classes.processingConsent}>
            <FormControlLabel control={<Checkbox/>}
                              label='Согласен(-на) на обработку персональных данных&nbsp;*'/>
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