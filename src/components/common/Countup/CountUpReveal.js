import React, {useEffect, useRef, useState} from 'react';
import {Div} from "./Div";

const CountUpReveal = ({
                           component = Div,
                           ...props
                       }) => {
    const countUpRevealRef = useRef(null);
    const [reachedBreakpoint, setReachedBreakpoint] = useState(false);
    useEffect(() => {
        const breakpoint = countUpRevealRef.current.getBoundingClientRect().top + window.pageYOffset;
        const checkBreakpoint = () => {
            if(window.pageYOffset + window.innerHeight > breakpoint){
                setReachedBreakpoint(true);
                window.removeEventListener('scroll', checkBreakpoint);
            }
        };
        window.addEventListener('scroll', checkBreakpoint);
    });
    const Component = component;
    return (
        <Component {...props} ref={countUpRevealRef}>
            {reachedBreakpoint && props.children}
        </Component>
    );
};

export {CountUpReveal};