import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "./HomeBlockHeader";
import {HomePartnerItem} from "./HomePartnerItem";

const useStyles = makeStyles({
    homePartnersContainer: {
        paddingTop: '116px',
        justifyContent: 'center'
    }
});

const HomePartnersContainer = () => {
    const classes = useStyles();
    return (
        <Grid item xs={12}
              container
              className={classes.homePartnersContainer}>
            <HomeBlockHeader text='Наши партнеры'/>
            <HomePartnerItem href={'https://vk.com/start.mipt'} img={'/img/phystech.start.png'} alt={'Физтех.Старт'}/>
            <HomePartnerItem href={'http://my-mentor.ru'} img={'/img/my-mentor.png'} alt={'My-mentor.ru'}/>
            <HomePartnerItem href={'http://equium.club'} img={'/img/equium.png'} alt={'Эквиум - бизнес-сообщество'}/>
        </Grid>
    );
};

export {HomePartnersContainer};