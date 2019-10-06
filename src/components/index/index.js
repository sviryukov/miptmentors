import React from 'react';
import {CssBaseline, Hidden} from "@material-ui/core";
import Animation from './animation';
import Main from './main';

export default () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"/>
            <Main/>
        </React.Fragment>
    )
};