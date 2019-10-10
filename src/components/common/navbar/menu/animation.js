import mojs from '@mojs/core';

const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurve = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,0 C50,80.1708527 76.6222458,93.9449005 100,100' );

const build = (id, width) => new mojs.Shape({
    parent: document.getElementById(id),
    shape: 'line',
    top: 50,
    stroke: 'white',
    strokeWidth: 2,
    isShowStart: true,
    radiusX: width/2,
    scaleX: { 1: 1, curve: scaleCurve },
    origin: { '0 50%': '100% 50%', easing: shiftCurve },
    isForce3d: true
});

export { build };