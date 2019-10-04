import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        marginTop: '40px'
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center'
    },
    value: {
        margin: '0px',
        padding: '4px',
        borderRadius: '4px 4px 0px 0px',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        lineHeight: '1'
    },
    name: {
        margin: '0px',
        padding: '4px',
        borderRadius: '0px 0px 4px 4px',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        textAlign: 'center',
        lineHeight: '1.3'
    }
}));

export default props => {
    const classes = useStyles();
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        setInterval(() => {
            const date = calculateCountdown(props.date);
            setTimer(date);
        }, 1000);
    }, []);
    const calculateCountdown = end => {
        const now = new Date();
        let diff = (Date.parse(end) - now) / 1000;
        if (diff <= 0) return false;
        const timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        if (diff >= 24*60*60) {
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 60*60) {
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.minutes = Math.floor(diff / 60);
            diff -= timeLeft.minutes * 60;
        }
        timeLeft.seconds = Math.floor(diff);
        return timeLeft;
    };
    const addLeadingZeros = value => {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    };
    const addText = (value, name) => {
        const names = {
            days: ['День', 'Дня', 'Дней'],
            hours: ['Час', 'Часа', 'Часов'],
            minutes: ['Минута', 'Минуты', 'Минут'],
            seconds: ['Секунда', 'Секунды', 'Секунд']
        };
        if (value % 10 === 1 && (value < 10 || value > 20)) return names[name][0];
        else if ((value % 10 > 1 && value % 10 < 5) && (value < 10 || value > 20)) return names[name][1];
        else return names[name][2];
    };
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={12} style={{ fontSize: props.fontSize + 'px' }} className={classes.header}>
                До конца срока подачи заявок:
            </Grid>
            <Grid item xs={3}>
                <p style={{ fontSize: props.fontSize*1.5 + 'px' }} className={classes.value}>{addLeadingZeros(timer.days)}</p>
                <p style={{ fontSize: props.fontSize*0.8 + 'px' }} className={classes.name}>{addText(timer.days, 'days')}</p>
            </Grid>
            <Grid item xs={3}>
                <p style={{ fontSize: props.fontSize*1.5 + 'px' }} className={classes.value}>{addLeadingZeros(timer.hours)}</p>
                <p style={{ fontSize: props.fontSize*0.8 + 'px' }} className={classes.name}>{addText(timer.hours, 'hours')}</p>
            </Grid>
            <Grid item xs={3}>
                <p style={{ fontSize: props.fontSize*1.5 + 'px' }} className={classes.value}>{addLeadingZeros(timer.minutes)}</p>
                <p style={{ fontSize: props.fontSize*0.8 + 'px' }} className={classes.name}>{addText(timer.minutes, 'minutes')}</p>
            </Grid>
            <Grid item xs={3}>
                <p style={{ fontSize: props.fontSize*1.5 + 'px' }} className={classes.value}>{addLeadingZeros(timer.seconds)}</p>
                <p style={{ fontSize: props.fontSize*0.8 + 'px' }} className={classes.name}>{addText(timer.seconds, 'seconds')}</p>
            </Grid>
        </Grid>
    );
}