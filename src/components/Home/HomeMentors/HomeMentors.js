import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "../HomeBlockHeader";
import {HomeMentor} from "./HomeMentor";
import {HomeBlockLink} from "../HomeBlockLink";

const useStyles = makeStyles(theme => ({
    homeMentors: {
        padding : '75px 0px',
        borderBottom: '1px solid ' + theme.palette.divider,
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px'
        }
    }
}));

const HomeMentors = () => {
    const [mentors, setMentors] = useState([]);
    useEffect(() => {
        axios.get("/mentors_data", {
            params: {
                mentors: ['Сергей Белоусов', 'Ратмир Тимашев', 'Андрей Иващенко']
            }
        })
            .then(res => {
                setMentors(res.data);
            });
    }, []);
    const classes = useStyles();
    return (
        <Grid item xs={12}
              container
              className={classes.homeMentors}>
            <HomeBlockHeader text={'Наши менторы'}/>
            {mentors.map(mentor => (
                <HomeMentor name={mentor.name} img={mentor.img} education={mentor.education} work={mentor.work}/>
            ))}
            <HomeBlockLink href={'/mentors'} text={'Все менторы'}/>
        </Grid>
    );
};

export {HomeMentors};