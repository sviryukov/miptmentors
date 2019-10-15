import React, {useEffect, useRef} from 'react';

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 50,
                    final_position = 0,
                    component = div,
                    transitions = '',
                    style,
                    ...props
                }) => {
    if(transitions !== '') transitions = ', ' + transitions;
    const fadeFromBottomStyle = {
        ...style,
        position: 'relative',
        top: (final_position + interval) + 'px',
        opacity: 0,
        transition: 'opacity ' + duration + 's ' + delay + 's, top 0.5s ' + delay + 's' + transitions
    };
    const Component = component;
    const fadeFromBottom = useRef(null);
    useEffect(() => {
        fadeFromBottom.current.style.opacity = 1;
        fadeFromBottom.current.style.top = final_position + 'px';
    });
    return (
        <Component {...props} style={fadeFromBottomStyle} ref={fadeFromBottom}>
            {props.children}
        </Component>
    );
};