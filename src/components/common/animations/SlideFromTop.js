import React, {useEffect, useRef} from 'react';
import Div from "./Div";

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 100,
                    final_position = 0,
                    on_scroll = false,
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
        if (on_scroll) {
            slideFromTop.current.className += " revealElement";
            slideFromTop.current.dataset.revealOffsetTop = interval;
            slideFromTop.current.dataset.finalPosition = final_position;
        } else {
            slideFromTop.current.style.opacity = 1;
            slideFromTop.current.style.top = final_position + 'px';
        }
    });
    const Component = component;
    return (
        <Component {...props} style={slideFromTopStyle} ref={slideFromTop}>
            {props.children}
        </Component>
    );
};