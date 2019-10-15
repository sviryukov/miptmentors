import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import axios from 'axios';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/Navbar';
import PageHeader from '../common/PageHeader';
import MentorsSelect from "./MentorsSelect";
import MentorCard from './MentorCard';

let useStyles = makeStyles({
    mentorsContainer: {
        justifyContent: 'center'
    }
});

export default () => {
    const classes = useStyles();
    const [mentors, setMentors] = useState([]);
    const [category, setCategory] = useState('all');
    const [mentorsVisible, setMentorsVisible] = useState(false);
    useEffect(() => {
        axios.get("/mentors_data")
            .then(res => {
                setMentors(res.data);
                setMentorsVisible(true);
            });
    }, []);
    const handleSetCategory = newCategory => {
        setMentorsVisible(false);
        setTimeout(() => {
            setCategory(newCategory);
            setMentorsVisible(true);
        }, 300);
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Grid container justify='center'>
                <PageHeader text='Менторы проекта'/>
                <MentorsSelect setCategory={handleSetCategory}/>
                <Grid container spacing={4} item xs={10} lg={7} xl={8} className={classes.mentorsContainer}>
                    {mentors.map((mentor, i) => (
                        (category === 'all' || mentors[i].categories.indexOf(category) !== -1) &&
                        <MentorCard key={mentor.name}
                                    name={mentor.name}
                                    img={mentor.img}
                                    education={mentor.education}
                                    work={mentor.work}
                                    visible={mentorsVisible}/>
                    ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};