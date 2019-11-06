import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from '@material-ui/core';

let useStyles = makeStyles({
    findMentorFormAcceleratorsLink: {
        textDecoration: 'underline',
        fontSize: '16px'
    }
});

const FindMentorFormAcceleratorsLabel = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            Являюсь участником программы&nbsp;
            <Link href={props.href}  target='_blank'
                  className={classes.findMentorFormAcceleratorsLink}>
                {props.program}
            </Link>
        </React.Fragment>
    );
};

export {FindMentorFormAcceleratorsLabel};