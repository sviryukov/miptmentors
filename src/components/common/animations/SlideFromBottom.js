import React, {useEffect, useRef} from 'react';

export default ({
                    delay = 0,
                    duration = 0.5,
                    interval = 100,
                    component = div,
                    final_position = 0,
                    style,
                    ...props
                }) => {
    const slideFromBottomStyle = {
        ...style,
        position: 'relative',
        top: (final_position + interval) + 'px',
        transition: 'top ' + duration + 's ' + delay + 's'
    };
    const Component = component;
    const slideFromBottom = useRef(null);
    useEffect(() => {
        slideFromBottom.current.style.top = final_position + 'px';
    });
    return (
        <Component {...props} style={slideFromBottomStyle} ref={slideFromBottom}>
            {props.children}
        </Component>
    );
};