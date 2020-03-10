import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Box} from '@material-ui/core';
import {FormHeader} from "../../common/forms/FormHeader";
/*import {ShortTextField} from "../../common/forms/ShortTextField";
import {FindMentorFormDepartment} from "./FindMentorFormDepartment";
import {FindMentorFormYear} from "./FindMentorFormYear";
import {Textarea} from "../../common/forms/Textarea";
import {FindMentorFormTracks} from "./FindMentorFormTracks";
import {LongTextField} from "../../common/forms/LongTextField";
import {FindMentorFormAccelerators} from "./FindMentorFormAccelerators";
import {PublicationConsent} from "../../common/forms/PublicationConsent";
import {ProcessingConsent} from "../../common/forms/ProcessingConsent";
import {SendButton} from "../../common/forms/SendButton";*/

const useStyles = makeStyles(theme => ({
    findMentorForm: {
        borderRadius: '4px',
        padding: '80px 50px 40px',
        fontSize: '19px',
        [theme.breakpoints.up('sm')]: {
            padding: '100px 50px 40px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '64px',
            margin: '80px 0px 50px',
            backgroundColor: theme.palette.background.paper
        },
        [theme.breakpoints.up('xl')]: {
            marginTop: '120px'
        }
    }
}));

const FindMentorForm = () => {
    const classes = useStyles();
    return (
        <Grid component={Box}
              boxShadow={{xs: 0, md: 3}}
              item xs={12} md={7} lg={6} xl={5}
              className={classes.findMentorForm}>
            <FormHeader text='Найти ментора'/>
            <br/>
            Регистрация на 5-й сезон Клуба Менторов Физтех-Союза закрыта.
            <br/>
            <br/>
            Присоединяйтесь к нам в следующем сезоне в октябре 2020 года.
            {/*<ShortTextField label='Имя *' name='name'/>
            <ShortTextField label='Фамилия *' name='surname'/>
            <FindMentorFormDepartment/>
            <FindMentorFormYear/>
            <Textarea label='Опыт работы' name='work-exp'/>
            <Textarea label='Интересы' name='interests'/>
            <Textarea label='Почему вам нужен наставник? *' name='motivation'/>
            <FindMentorFormTracks/>
            <ShortTextField label='Телефон *' name='phone'/>
            <ShortTextField label='E-mail *' name='email'/>
            <LongTextField label='Профиль в социальной сети' name='social-net-link'/>
            <FindMentorFormAccelerators/>
            <PublicationConsent/>
            <ProcessingConsent/>
            <SendButton/>*/}
        </Grid>
    );
};

export {FindMentorForm};