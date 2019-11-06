import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Grid, Select, MenuItem} from "@material-ui/core";

const useStyles = makeStyles({
    mentorsSelectContainer: {
        textAlign: 'center'
    },
    mentorsSelect: {
        width: "220px",
        marginBottom: '50px',
        textAlign: 'left'
    }
});

const MentorsSelect = props => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('all');
    const handleChange = event => {
        setCategory(event.target.value);
        props.setCategory(event.target.value);
    };
    return (
        <Grid item xs={12} className={classes.mentorsSelectContainer}>
            <Select value={category} onChange={handleChange} className={classes.mentorsSelect}>
                <MenuItem value={'all'}>Все направления</MenuItem>
                <MenuItem value={'business'}>Бизнес направление</MenuItem>
                <MenuItem value={'career'}>Карьерное направление</MenuItem>
                <MenuItem value={'science'}>Научное направление</MenuItem>
            </Select>
        </Grid>
    );
};

export {MentorsSelect};