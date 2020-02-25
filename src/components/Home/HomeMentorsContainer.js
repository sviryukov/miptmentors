import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "./HomeBlockHeader";
import {HomeMentor} from "./HomeMentor";
import {HomeAllMentorsLink} from "./HomeAllMentorsLink";

const useStyles = makeStyles(theme => ({
    homeMentorsContainer: {
        padding : '75px 0px',
        borderTop: '1px solid ' + theme.palette.divider,
        backgroundColor: theme.palette.background.default,
        justifyContent: 'center'
    }
}));

const HomeMentorsContainer = () => {
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
              className={classes.homeMentorsContainer}>
            <HomeBlockHeader text={'Наши менторы'}/>
            {mentors.map(mentor => (
                <HomeMentor name={mentor.name} img={mentor.img} education={mentor.education} work={mentor.work}/>
            ))}
            <HomeAllMentorsLink/>
        </Grid>
    );
};

export {HomeMentorsContainer};