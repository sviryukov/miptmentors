import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {CssBaseline, Grid, Fade} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Navbar from '../common/navbar';
import Select from "./select";
import Card from './card';
import Header from '../common/header';

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
                <Header text='Менторы проекта'/>
                <Select setCategory={handleSetCategory}/>
                <Grid item xs={12}/>
                <Grid item xs={10} sm={8} lg={7} xl={8}>
                    <Fade in={mentorsVisible}>
                        <Grid container spacing={4} className={classes.mentorsContainer}>
                            {mentors.map((mentor, i) => (
                                (category === 'all' || mentors[i].categories.indexOf(category) !== -1) &&
                                <Card key={mentor.name}
                                      name={mentor.name}
                                      img={mentor.img}
                                      education={mentor.education}
                                      work={mentor.work}/>
                            ))}
                        </Grid>
                    </Fade>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};