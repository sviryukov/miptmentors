import React, {useEffect, useRef} from 'react';
import Div from "./Div";

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 100,
                    final_position = 0,
                    component = Div,
                    style,
                    ...props
                }) => {
    const slideFromTopStyle = {
        ...style,
        position: 'relative',
        top: (final_position - interval) + 'px'
    };
    const slideFromTop = useRef(null);
    useEffect(() => {
        const slideFromTopTransition = 'top ' + duration + 's ' + delay + 's';
        const componentTransition = window.getComputedStyle(slideFromTop.current).transition;
        if (componentTransition !== '')
            slideFromTop.current.style.transition = componentTransition + ', ' + slideFromTopTransition;
        else slideFromTop.current.style.transition = slideFromTopTransition;
        slideFromTop.current.style.top = final_position + 'px';
    });
    const Component = component;
    return (
        <Component {...props} style={slideFromTopStyle} ref={slideFromTop}>
            {props.children}
        </Component>
    );
};