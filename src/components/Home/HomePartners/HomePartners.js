import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "../HomeBlockHeader";
import {HomePartnerItem} from "./HomePartnerItem";

const useStyles = makeStyles({
    homePartners: {
        padding: '75px 0px 150px',
        justifyContent: 'center'
    }
});

const HomePartners = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              container
              className={classes.homePartners}>
            <HomeBlockHeader text='Наши партнеры'/>
            <HomePartnerItem href={'https://vk.com/start.mipt'} img={'/img/phystech.start.png'} alt={'Физтех.Старт'}/>
            <HomePartnerItem href={'http://my-mentor.ru'} img={'/img/my-mentor.png'} alt={'My-mentor.ru'}/>
            <HomePartnerItem href={'http://equium.club'} img={'/img/equium.png'} alt={'Эквиум - бизнес-сообщество'}/>
        </Grid>
    );
};

export {HomePartners};