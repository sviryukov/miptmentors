import React, {useEffect, useState} from 'react';
import {Div} from './Div';

const CountUp = ({
                     initial = 0,
                     final = 100,
                     interval = 20,
                     component = Div,
                     ...props
                 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count < final)
            setTimeout(() => {
                setCount(count + 1);
            }, interval);
    });
    const Component = component;
    return (
        <Component {...props}>
            {count}
        </Component>
    );
};

export {CountUp};