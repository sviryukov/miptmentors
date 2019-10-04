import React from 'react';
import {Divider, Drawer, Grid, Hidden, List} from '@material-ui/core';
import DrawerMenuItem from "./item";
import DrawerMenuSignIn from "./signin";

export default props => {
    return (
        <Drawer anchor='right' open={props.open} onClose={props.handleOnClose}>
            <List>
                <DrawerMenuItem text='Новости проекта' href='/news'/>
                <DrawerMenuItem text='Менторы проекта' href='/mentors'/>
                <DrawerMenuItem text='Контакты' href='/contacts'/>
            </List>
            <Divider/>
            <DrawerMenuSignIn/>
        </Drawer>
    );
};