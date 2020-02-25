import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {CountUpReveal} from "../common/Countup";
import {HomeCountUpItem} from "./HomeCountUpItem";

const useStyles = makeStyles(theme => ({
    homeCountUpsContainer: {
        padding: '75px 0px',
        margin: '0px',
        borderTop: '1px solid ' + theme.palette.divider,
        background: 'url(/img/bg.png) 0 0 repeat ' + theme.palette.background.paper,
        justifyContent: 'center'
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