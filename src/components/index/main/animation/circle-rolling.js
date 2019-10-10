import mojs from '@mojs/core';

const build = () => {
    return new mojs.Shape({
        parent: document.getElementById('container'),
        fill: 'none',
        radius: 190,
        stroke: 'cyan',
        strokeWidth: 6,
        strokeDasharray: '100%',
        strokeDashoffset: '90%',
        angle: {'0': '1800'},
        duration: 27000,
        easing: 'linear.none'
    });
};

export { build };