import React, {useEffect, useState} from 'react';
import {Div} from '../Div';

const CountUp = ({
                     initial = 0,
                     finalValue = 100,
                     interval = 20,
                     component = Div,
                     ...props
                 }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count < finalValue)
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