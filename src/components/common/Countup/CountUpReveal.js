import React, {useEffect, useRef, useState} from 'react';
import {Div} from "../Div";
import {CountUp} from "./CountUp";

const CountUpReveal = ({
                           component = Div,
                           offset = 0,
                           countUpComponent = CountUp,
                           countUpProps = [],
                           ...props
                       }) => {
    const countUpRevealRef = useRef(null);
    const [reachedBreakpoint, setReachedBreakpoint] = useState(false);
    useEffect(() => {
        const checkBreakpoint = () => {
            if (countUpRevealRef.current.getBoundingClientRect().top + offset - window.innerHeight < 0) {
                setReachedBreakpoint(true);
                window.removeEventListener('scroll', checkBreakpoint);
            }
        };
        checkBreakpoint();
        window.addEventListener('scroll', checkBreakpoint);
    });
    const Component = component;
    const CountUpComponent = countUpComponent;
    return (
        <Component {...props.componentProps} ref={countUpRevealRef}>
            {countUpProps.map((countUpItem, i) => (
                <CountUpComponent key={i} {...countUpItem} finalValue={reachedBreakpoint ? countUpItem.finalValue : 0}/>
            ))}
        </Component>
    );
};

export {CountUpReveal};