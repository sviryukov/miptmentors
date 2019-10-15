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
    const fadeFromTopStyle = {
        ...style,
        position: 'relative',
        top: (final_position - interval) + 'px',
        opacity: 0,
        transition: 'opacity ' + duration + 's ' + delay + 's, top ' + duration + 's ' + delay + 's' + transitions
    };
    const Component = component;
    const fadeFromTop = useRef(null);
    useEffect(() => {
        fadeFromTop.current.style.opacity = 1;
        fadeFromTop.current.style.top = final_position + 'px';
    });
    return (
        <Component {...props} style={fadeFromTopStyle} ref={fadeFromTop}>
            {props.children}
        </Component>
    );
};