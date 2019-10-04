import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Box, Grid, Link} from "@material-ui/core";
import {Facebook, Telegram} from '@material-ui/icons';
import Vk from '../common/vk-icon';

let useStyles = makeStyles(theme =>({
    container: {
        textAlign: 'center'
    },
    imgBox: {
        width: '100%',
        marginBottom: '40px',
        borderRadius: '50%',
        overflow: 'hidden',
        fontSize: '0px'
    },
    img: {
        width: '100%'
    },
    icon: {
        color: theme.palette.text.secondary,
        fontSize: '30px',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <Grid item lg={3} md={4} sm={7} xs={9} className={classes.container}>
            <Box boxShadow={3} className={classes.imgBox}>
                <img className={classes.img} src={'/img/' + props.img}/>
            </Box>
            <p><b>{props.name}</b></p>
            <p>{props.role}</p>
            <p>
                <Link href={'mailto:' + props.email} target='_blanc'>{props.email}</Link>
                <br/>
                <Link href={'tel:' + props.phone} target='_blanc'>{props.phone}</Link>
            </p>
            <p>
                {props.vk &&
                    <Link href={props.vk} target='_blanc'>
                        <Vk className={classes.icon}/>
                    </Link>}
                {props.facebook &&
                    <Link href={props.facebook} target='_blanc'>
                        <Facebook className={classes.icon}/>
                    </Link>}
                {props.telegram &&
                    <Link href={props.telegram} target='_blanc'>
                        <Telegram className={classes.icon}/>
                    </Link>}
            </p>
        </Grid>
    );
};