import React from 'react';
import {Divider, Drawer, List} from '@material-ui/core';
import DrawerItem from "./DrawerItem";
import DrawerSignIn from "./DrawerSignIn";

export default props => {
    return (
        <Drawer anchor='right' open={props.open} onClose={props.handleOnClose}>
            <List>
                <DrawerItem text='Новости проекта' href='/news'/>
                <DrawerItem text='Менторы проекта' href='/mentors'/>
                <DrawerItem text='Контакты' href='/contacts'/>
            </List>
            <Divider/>
            <DrawerSignIn/>
        </Drawer>
    );
};