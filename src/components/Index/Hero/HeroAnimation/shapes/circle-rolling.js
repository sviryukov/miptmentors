import mojs from '@mojs/core';

const build = () => new mojs.Shape({
    parent: document.getElementById('hero-animation'),
    fill: 'none',
    radius: 181,
    stroke: 'cyan',
    strokeLinecap: 'round',
    strokeWidth: 6,
    strokeDasharray: '100%',
    strokeDashoffset: '90%',
    angle: {'0': '360'},
    duration: 7200,
    easing: 'sin.in'
}).then({
    angle: {'0': '1440'},
    duration: 19800,
    easing: 'linear.none',
    repeat: 4909
});

export {build};