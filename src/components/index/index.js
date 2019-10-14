import React, {useEffect} from 'react';
import {CssBaseline} from "@material-ui/core";
import Main from './main';
import RestPage from './rest-page';

export default () => {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <CssBaseline/>
            <Main/>
            <RestPage/>
        </React.Fragment>
    )
};