import React from 'react';
import {FormControl, Select, MenuItem, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    formControl: {
        width: "100%",
        marginBottom: '50px'
    }
});

export default props => {
    const classes = useStyles();
    const [category, setCategory] = React.useState('all');
    const handleChange = event => {
        setCategory(event.target.value);
        props.setCategory(event.target.value);
    };
    return (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={8}>
            <FormControl className={classes.formControl}>
                <Select value={category} onChange={handleChange}>
                    <MenuItem value={'all'}>Все направления</MenuItem>
                    <MenuItem value={'business'}>Бизнес направление</MenuItem>
                    <MenuItem value={'career'}>Карьерное направление</MenuItem>
                    <MenuItem value={'science'}>Научное направление</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
};