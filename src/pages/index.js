import React from 'react';
import { hydrate } from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import Index from '../components/index';
import theme from "../theme";

theme.palette.background.default = theme.palette.primary.main;

function Main() {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Index client={true}/>
        </ThemeProvider>
    );
}

hydrate(<Main/>, document.getElementById('root'));