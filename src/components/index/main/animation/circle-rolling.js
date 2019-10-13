import mojs from '@mojs/core';

const build = initial => new mojs.Shape({
    parent: document.getElementById('animation'),
    fill: 'none',
    radius: 181,
    stroke: 'cyan',
    strokeLinecap: 'round',
    strokeWidth: 6,
    strokeDasharray: '100%',
    strokeDashoffset: '90%',
    angle: {'0': '360'},
    duration: 5400,
    easing: initial ? 'sin.in' : 'linear.none',
    isShowEnd: false
}).then({
    angle: {'0': '1440'},
    duration: 21600,
    easing: 'linear.none'
});

export { build };