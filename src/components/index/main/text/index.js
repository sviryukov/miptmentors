import React from 'react'
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Header from './header';
import Description from './description';
import Button from './button';
import LearnMore from './learn-more';

const useStyles = makeStyles(theme => ({
    text: {
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'left'
        }
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <Grid item xs={12} md={10} lg={7} className={classes.text}>
            <Header animation_delay={0}/>
            <Description animation_delay={0.1}/>
            <Button text='Найти ментора' animation_delay={0.2}/>
            <Button text='Стать ментором' animation_delay={0.2}/>
            <LearnMore animation_delay={0.3}/>
        </Grid>
    );
};