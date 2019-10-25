import React from 'react';
import { hydrate } from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import Index from '../components/Index';
import theme from "../theme";

function Main() {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Index/>
        </ThemeProvider>
    );
}

hydrate(<Main/>, document.getElementById('root'));