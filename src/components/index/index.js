import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Main from './main';
import RestPage from './rest-page';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Main/>
            <RestPage/>
        </React.Fragment>
    )
};