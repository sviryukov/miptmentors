import React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Navbar from '../common/navbar';
import Contact from './contact';
import Header from "../common/header";

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar/>
            <Grid container justify='center'>
                <Header text='Контакты'/>
                <Grid item xs={11} sm={8} md={11} lg={10} xl={8}>
                    <Grid container spacing={6} justify='center'>
                        <Contact img='kirill.jpg'
                                 name='Кирилл Свирюков'
                                 role='Менеджер проекта «Клуб Менторов Физтех‑Союза»'
                                 email='sviryukov.k@phystech.edu'
                                 phone='+7 (925) 047-93-58'
                                 vk='https://vk.com/sviryukovk'
                                 telegram='https://t.me/sskirill'/>
                        <Contact img='shtern.jpg'
                                 name='Алексей Штерн'
                                 role='Исполнительный директор «Физтех‑Союза»'
                                 email='as@phystechunion.org'
                                 phone='+7 (916) 906-62-98'
                                 vk='https://vk.com/alexey_shtern'
                                 facebook='https://facebook.com/alex.shtern'
                                 telegram='https://t.me/AlekseyShtern'/>
                        <Contact img='sergey.jpg'
                                 name='Сергей Шершень'
                                 role='Сооснователь проекта My‑mentor.ru'
                                 email='shershen@my-mentor.ru'
                                 phone='+7 (915) 093-96-84'
                                 facebook='https://facebook.com/sergshen1'
                                 telegram='https://t.me/sergshen'/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};