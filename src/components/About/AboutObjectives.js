import React from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {PageHeader} from "../common/PageHeader";

const useStyles = makeStyles(theme => ({
    aboutObjectives: {
        margin: '0px',
        padding: '70px 0px 0px',
        listStyle: 'none',
        [theme.breakpoints.up("md")]: {
            padding: '100px 0px 0px'
        }
    },
    aboutObjectivesList: {
        listStylePosition: 'inside',
        fontSize: '16px',
        [theme.breakpoints.up("md")]: {
            fontSize: '20px'
        }
    },
    aboutObjectivesListItem: {
        marginBottom: '20px'
    }
}));

const AboutObjectives = () => {
    const classes = useStyles();
    const objectives = [
        (<>
            Организация процесса наставничества по трем направлениям:
            <ul style={{listStylePosition: 'inside', listStyle: 'disc'}}>
                <li>
                    научное: построение карьеры в науке;
                </li>
                <li>
                    предпринимательское (проектное): технологическое предпринимательство и стартапы;
                </li>
                <li>
                    карьерное и жизненная навигация: построение карьеры в компаниях, выбор жизненного и карьерного пути.
                </li>
            </ul>
        </>),
        'Создание возможностей для эффективной коммуникации и среды общения между менти и менторами для обмена профессиональным и жизненным опытом с целью повышения личной эффективности менти.',
        'Организация регулярных мероприятий, способствующих эффективной работе сообщества менторов'];
    return (
        <Grid container spacing={6} justify='center'
              item xs={12} sm={11} md={10} xl={6}
              className={classes.aboutObjectives}>
            <PageHeader text='ЗАДАЧИ ПРОЕКТА' variant='h2'/>
            <Grid item xs={12}
                  component='ol'
                  className={classes.aboutObjectivesList}>
                {objectives.map((objective, i) => (
                    <li key={i} className={classes.aboutObjectivesListItem}>
                        {objective}
                    </li>
                ))}
            </Grid>
        </Grid>
    );
};

export {AboutObjectives};