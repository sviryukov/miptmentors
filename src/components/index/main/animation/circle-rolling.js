import mojs from '@mojs/core';

const build = () => new mojs.Shape({
    parent: document.getElementById('animation'),
    fill: 'none',
    radius: 181,
    stroke: 'cyan',
    strokeWidth: 6,
    strokeDasharray: '100%',
    strokeDashoffset: '90%',
    angle: {'0': '1800'},
    duration: 27000,
    easing: 'linear.none'
});

export { build };