import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

let useStyles = makeStyles(theme => ({
    findMentorFormDepartmentSelect: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '45%',
            marginRight: '5%'
        }
    }
}));

const FindMentorFormDepartment = () => {
    const classes = useStyles();
    const [department, setDepartment] = useState('');
    const handleChange = event => setDepartment(event.target.value);
    return (
        <FormControl margin='normal'
                     className={classes.findMentorFormDepartmentSelect}>
            <InputLabel>
                Факультет *
            </InputLabel>
            <Select value={department}
                    onChange={handleChange}
                    name='department'
                    id='department'>
                <MenuItem value={'ФРТК'}>ФРТК</MenuItem>
                <MenuItem value={'ФФКЭ'}>ФФКЭ</MenuItem>
                <MenuItem value={'ФОПФ'}>ФОПФ</MenuItem>
                <MenuItem value={'ФПФЭ'}>ФПФЭ</MenuItem>
                <MenuItem value={'ФАКИ'}>ФАКИ</MenuItem>
                <MenuItem value={'ФУПМ'}>ФУПМ</MenuItem>
                <MenuItem value={'ФИВТ'}>ФИВТ</MenuItem>
                <MenuItem value={'ФАЛТ'}>ФАЛТ</MenuItem>
                <MenuItem value={'ФМХФ'}>ФМХФ</MenuItem>
                <MenuItem value={'ИНБИКСТ'}>ИНБИКСТ</MenuItem>
            </Select>
        </FormControl>
    );
};

export {FindMentorFormDepartment};