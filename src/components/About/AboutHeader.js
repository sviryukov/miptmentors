import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {PageHeader} from "../common/PageHeader";

const useStyles = makeStyles(theme => ({
    aboutHeader: {
        margin: '0px',
        padding: '0px 0px 70px',
        background: 'linear-gradient(45deg, ' + theme.palette.primary.light + ', ' + theme.palette.primary.dark + ')',
        shapeOutside: 'polygon(0 0, 100% 0, 100% 95%, 33% 100%, 0 95%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 95%, 33% 100%, 0 95%)',
        color: theme.palette.text.light,
        fontSize: '18px',
        [theme.breakpoints.up("md")]: {
            padding: '0px 0px 120px',
            shapeOutside: 'polygon(0 0, 100% 0, 100% 80%, 33% 100%, 0 80%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 33% 100%, 0 80%)',
            textAlign: 'center',
            fontSize: '20px'
        }
    }
}));

const AboutHeader = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2} justify='center'
              item xs={12}
              className={classes.aboutHeader}>
            <Grid item xs={10} md={8}>
                <PageHeader text='О проекте' color='light'/>
                Основная цель деятельности Клуба — создание среды возможностей, в рамках которой менторы, профессионалы в своей области, помогают в развитии, повышении компетенций и расширении кругозора через передачу собственного опыта и знаний студентам, выпускникам МФТИ, участникам акселерационных и других программ, проводимых в МФТИ.
            </Grid>
        </Grid>
    );
};

export {AboutHeader};