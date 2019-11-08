import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {CountUpReveal} from "../common/Countup";
import {HomeCountUpItem} from "./HomeCountUpItem";

const useStyles = makeStyles(theme => ({
    homeCountUpsContainer: {
        padding: '140px 0px',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, ' + theme.palette.secondary.light + ', ' + theme.palette.secondary.dark + ')',
        shapeOutside: 'polygon(0 30px, 66% 60px, 100% 0px, 100% 100%, 33% calc(100% - 60px), 0 calc(100% - 30px))',
        clipPath: 'polygon(0 30px, 66% 60px, 100% 0px, 100% 100%, 33% calc(100% - 60px), 0 calc(100% - 30px))',
        color: theme.palette.text.light
    }
}));

const HomeCountUpsContainer = () => {
    const classes = useStyles();
    const countUpProps = [
        {
            finalValue: 129,
            interval: 1000/129,
            text: 'студентов получили помощь от наших менторов'
        },
        {
            finalValue: 43,
            interval: 1000/43,
            text: 'ментора являются постоянными участниками проекта'
        },
        {
            finalValue: 31,
            interval: 1000/31,
            text: 'проект реализован под руководсвом наших менторов'
        }
    ];
    return (
        <CountUpReveal countUpComponent={HomeCountUpItem}
                       countUpProps={countUpProps}
                       offset={-50}
                       component={Grid}
                       componentProps={{
                           item: true,
                           xs: 12,
                           container: true,
                           spacing: 4,
                           className: classes.homeCountUpsContainer
                       }}/>
    );
};

export {HomeCountUpsContainer};