import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
    footerContacts: {
        paddingTop: '16px'
    },
    footerContactsLink: {
        color: 'white'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.footerContacts}>
            <Link href='tel:+79250479358' className={classes.footerContactsLink}>
                +7 (925) 047-93-58
            </Link>
            <br/>
            <Link href='mailto:sviryukov.k@phystech.edu' className={classes.footerContactsLink}>
                sviryukov.k@phystech.edu
            </Link>
        </div>
    );
}