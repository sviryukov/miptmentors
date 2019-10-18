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
    const fadeFromBottomStyle = {
        ...style,
        position: 'relative',
        top: (final_position + interval) + 'px',
        opacity: 0
    };
    const fadeFromBottom = useRef(null);
    useEffect(() => {
        const fadeFromBottomTransition = 'opacity ' + duration + 's ' + delay + 's, top ' + duration + 's ' + delay + 's';
        const componentTransition = window.getComputedStyle(fadeFromBottom.current).transition;
        if (componentTransition !== '')
            fadeFromBottom.current.style.transition = componentTransition + ', ' + fadeFromBottomTransition;
        else fadeFromBottom.current.style.transition = fadeFromBottomTransition;
        fadeFromBottom.current.style.opacity = 1;
        fadeFromBottom.current.style.top = final_position + 'px';
    });
    const Component = component;
    return (
        <Component {...props} style={fadeFromBottomStyle} ref={fadeFromBottom}>
            {props.children}
        </Component>
    );
};