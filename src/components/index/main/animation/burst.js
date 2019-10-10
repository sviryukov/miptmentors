import mojs from '@mojs/core';
import theme from "../../../../theme";

const build = delay => {
    return new mojs.Burst({
        parent: document.getElementById('container'),
        radius: { 110: 200 },
        angle: 30,
        children: {
            shape: 'line',
            radius: 10,
            stroke: theme.palette.secondary.main,
            strokeDasharray: '100%',
            strokeDashoffset: { '-100%' : '100%' },
            duration: 700,
            easing:'quad.out',
            delay: delay + 300
        }
    });
};

export { build };