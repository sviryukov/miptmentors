import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {CountUpReveal} from "../common/Countup";
import {HomeCountUp} from "./HomeCountUp";

const useStyles = makeStyles(theme => ({
    homeCountUpsContainer: {
        padding: '140px 0px',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, ' + theme.palette.secondary.light + ', ' + theme.palette.secondary.dark + ')',
        shapeOutside: 'polygon(0 30px, 66% 60px, 100% 0px, 100% 100%, 66% calc(100% - 60px), 0 calc(100% - 30px))',
        clipPath: 'polygon(0 30px, 66% 60px, 100% 0px, 100% 100%, 66% calc(100% - 60px), 0 calc(100% - 30px))',
        color: theme.palette.text.light
    }
}));

const HomeCountUpsContainer = () => {
    const classes = useStyles();
    return (
        <CountUpReveal component={Grid} offset={-350}
                       item xs={12}
                       container spacing={4}
                       className={classes.homeCountUpsContainer}>
            <HomeCountUp finalValue={129} interval={1000/129}>
                студентов получили помощь от наших менторов
            </HomeCountUp>
            <HomeCountUp finalValue={43} interval={1000/43}>
                ментора являются постоянными участниками проекта
            </HomeCountUp>
            <HomeCountUp finalValue={31} interval={1000/31}>
                проект реализован под руководсвом наших менторов
            </HomeCountUp>
        </CountUpReveal>
    );
};

export {HomeCountUpsContainer};