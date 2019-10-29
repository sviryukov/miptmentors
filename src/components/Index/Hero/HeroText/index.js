import React from 'react'
import {Grid} from "@material-ui/core";
import HeroTextHeader from './HeroTextHeader';
import HeroTextDescription from './HeroTextDescription';
import HeroTextButton from './HeroTextButton';
import HeroTextLearnMore from './HeroTextLearnMore';

export default () => {
    return (
        <Grid item xs={12} md={10} lg={7}>
            <HeroTextHeader animation_delay={0}/>
            <HeroTextDescription animation_delay={0.1}/>
            <HeroTextButton text='Найти ментора' animation_delay={0.2}/>
            <HeroTextButton text='Стать ментором' animation_delay={0.2}/>
            <HeroTextLearnMore animation_delay={0.3}/>
        </Grid>
    );
};