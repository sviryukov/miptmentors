import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {CountUpReveal} from "../../common/Countup";
import {HomeCountUpItem} from "./HomeCountUpItem";

const useStyles = makeStyles(theme => ({
    homeCountUps: {
        padding: '75px 0px',
        borderBottom: '1px solid ' + theme.palette.divider,
        background: 'url(/img/bg.png) 0 0 repeat ' + theme.palette.background.paper,
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px'
        }
    }
}));

const HomeCountUps = () => {
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
            finalValue: 65,
            interval: 1000/65,
            text: 'проект реализован под руководсвом наших менторов'
        }
    ];
    return (
        <CountUpReveal countUpComponent={HomeCountUpItem}
                       countUpProps={countUpProps}
                       offset={240}
                       component={Grid}
                       componentProps={{
                           item: true,
                           xs: 12,
                           container: true,
                           className: classes.homeCountUps
                       }}/>
    );
};

export {HomeCountUps};