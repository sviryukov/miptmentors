import React, {useEffect, useRef} from 'react';

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 100,
                    final_position = 0,
                    component = div,
                    style,
                    ...props
                }) => {
    const slideFromTopStyle = {
        ...style,
        position: 'relative',
        top: (final_position - interval) + 'px',
        transition: 'top ' + duration + 's ' + delay + 's'
    };
    const Component = component;
    const slideFromTop = useRef(null);
    useEffect(() => {
        slideFromTop.current.style.top = final_position + 'px';
    });
    return (
        <Component {...props} style={slideFromTopStyle} ref={slideFromTop}>
            {props.children}
        </Component>
    );
};