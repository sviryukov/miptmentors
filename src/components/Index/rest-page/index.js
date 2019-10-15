import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {SlideFromBottom} from "../../common/animations";

const useStyles = makeStyles({
    restPage: {
        minHeight: '2000px',
        margin: 'auto',
        backgroundColor: '#fafafa'
    }
});

export default () => {
    const classes = useStyles();
    const [width, setWidth] = useState(90);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let add_width = window.scrollY < 500 ? 10 * window.scrollY / 500 : 10;
            setWidth(90 + add_width)
        });
    }, []);
    return (
        <SlideFromBottom component={Grid}
                         delay={0.5}
                         interval={300}
                         final_position={-100}
                         container
                         className={classes.restPage}
                         style={{width: width + '%'}}>

        </SlideFromBottom>
    );
};