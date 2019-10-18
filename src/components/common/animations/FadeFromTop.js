import React, {useEffect, useRef} from 'react';
import Div from "./Div";

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 50,
                    final_position = 0,
                    component = Div,
                    style,
                    ...props
                }) => {
    const fadeFromTopStyle = {
        ...style,
        position: 'relative',
        top: (final_position - interval) + 'px',
        opacity: 0
    };
    const fadeFromTop = useRef(null);
    useEffect(() => {
        const fadeFromTopTransition = 'opacity ' + duration + 's ' + delay + 's, top ' + duration + 's ' + delay + 's';
        const componentTransition = window.getComputedStyle(fadeFromTop.current).transition;
        if (componentTransition !== '')
            fadeFromTop.current.style.transition = componentTransition + ', ' + fadeFromTopTransition;
        else fadeFromTop.current.style.transition = fadeFromTopTransition;
        fadeFromTop.current.style.opacity = 1;
        fadeFromTop.current.style.top = final_position + 'px';
    });
    const Component = component;
    return (
        <Component {...props} style={fadeFromTopStyle} ref={fadeFromTop}>
            {props.children}
        </Component>
    );
};