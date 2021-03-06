import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from "axios";
import {Grid} from "@material-ui/core";
import {HomeBlockHeader} from "../HomeBlockHeader";
import {HomeMentorCardSkeleton} from "./HomeMentorCardSkeleton";
import {HomeMentorCard} from "./HomeMentorCard";
import {HomeBlockLink} from "../HomeBlockLink";

const useStyles = makeStyles(theme => ({
    homeMentors: {
        padding: '75px 0px',
        borderBottom: '1px solid ' + theme.palette.divider,
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            padding: '100px 0px'
        }
    }
}));

const HomeMentors = () => {
    const [mentors, setMentors] = useState([]);
    const [mentorsVisible, setMentorsVisible] = useState(false);
    useEffect(() => {
        axios.get("/mentors_data", {
            params: {
                mentors: ['Сергей Белоусов', 'Сергей Дашков', 'Андрей Иващенко']
            }
        })
            .then(res => {
                setMentors(res.data);
                setMentorsVisible(true);
            });
    }, []);
    const classes = useStyles();
    return (
        <Grid item xs={12}
              container
              className={classes.homeMentors}>
            <HomeBlockHeader text={'Наши менторы'}/>
            {mentors.length === 0 ? (
                <>
                    <HomeMentorCardSkeleton/>
                    <HomeMentorCardSkeleton/>
                    <HomeMentorCardSkeleton/>
                </>
            ) :(mentors.map(mentor => (
                <HomeMentorCard key={mentor.name}
                                name={mentor.name}
                                img={mentor.img}
                                education={mentor.education}
                                work={mentor.work}
                                visible={mentorsVisible}/>
            )))}
            <HomeBlockLink href={'/mentors'} text={'Все менторы'}/>
        </Grid>
    );
};

export {HomeMentors};