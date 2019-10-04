import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Main from './main';

export default props => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Main client={props.client}/>
        </React.Fragment>
    )
};