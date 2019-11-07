import React from 'react'
import {Grid} from "@material-ui/core";
import {HeroTextHeader} from './HeroTextHeader';
import {HeroTextDescription} from './HeroTextDescription';
import {HeroTextButton} from './HeroTextButton';
import {HeroTextLearnMore} from './HeroTextLearnMore';

const HeroText = () => {
    return (
        <Grid item xs={12} md={10} lg={7}>
            <HeroTextHeader/>
            <HeroTextDescription/>
            <HeroTextButton text='Найти ментора' href={'/findmentor'}/>
            <HeroTextButton text='Стать ментором' href={'/becomementor'}/>
            <HeroTextLearnMore/>
        </Grid>
    );
};

export {HeroText};