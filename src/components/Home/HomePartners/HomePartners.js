import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "../HomeBlockHeader";
import {HomePartnerLink} from "./HomePartnerLink";

const useStyles = makeStyles(theme => ({
    homePartners: {
        padding: '0px 0px 75px',
        backgroundColor: theme.palette.background.paper,
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '50px 0px 100px'
        }
    }
}));

const HomePartners = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              container
              className={classes.homePartners}>
            <HomeBlockHeader text='Наши партнеры'/>
            <HomePartnerLink href={'https://vk.com/start.mipt'} img={'/img/phystech.start.png'} alt={'Физтех.Старт'}/>
            <HomePartnerLink href={'http://my-mentor.ru'} img={'/img/my-mentor.png'} alt={'My-mentor.ru'}/>
        </Grid>
    );
};

export {HomePartners};