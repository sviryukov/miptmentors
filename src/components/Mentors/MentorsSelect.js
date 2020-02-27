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
    const [categorySelectValue, setCategorySelectValue] = React.useState('all');
    const handleChange = event => {
        setCategorySelectValue(event.target.value);
        props.setCategory(event.target.value);
    };
    return (
        <Grid item xs={12} className={classes.mentorsSelectContainer}>
            <Select value={categorySelectValue} onChange={handleChange} className={classes.mentorsSelect}>
                <MenuItem value={'all'}>Все направления</MenuItem>
                <MenuItem value={'business'}>Бизнес направление</MenuItem>
                <MenuItem value={'career'}>Карьерное направление</MenuItem>
                <MenuItem value={'science'}>Научное направление</MenuItem>
            </Select>
        </Grid>
    );
};

export {MentorsSelect};