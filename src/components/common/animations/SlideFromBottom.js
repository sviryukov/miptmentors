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
    const slideFromBottomStyle = {
        ...style,
        position: 'relative',
        top: (final_position + interval) + 'px'
    };
    const slideFromBottom = useRef(null);
    useEffect(() => {
        const slideFromBottomTransition = 'top ' + duration + 's ' + delay + 's';
        const componentTransition = window.getComputedStyle(slideFromBottom.current).transition;
        if (componentTransition !== '')
            slideFromBottom.current.style.transition = componentTransition + ', ' + slideFromBottomTransition;
        else slideFromBottom.current.style.transition = slideFromBottomTransition;
        if (on_scroll) {
            slideFromBottom.current.className += " revealElement";
            slideFromBottom.current.dataset.revealOffsetTop = interval;
            slideFromBottom.current.dataset.finalPosition = final_position;
        } else {
            slideFromBottom.current.style.opacity = 1;
            slideFromBottom.current.style.top = final_position + 'px';
        }
    });
    const Component = component;
    return (
        <Component {...props} style={slideFromBottomStyle} ref={slideFromBottom}>
            {props.children}
        </Component>
    );
};