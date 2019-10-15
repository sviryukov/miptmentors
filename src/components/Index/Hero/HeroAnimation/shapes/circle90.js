import mojs from '@mojs/core';
import stages from "../stages";

const build = () => new mojs.Shape({
    ...stages[0],
    fill: 'none',
    radius: 100,
    stroke: 'cyan',
    strokeLinecap: 'round',
    strokeWidth: 8,
    strokeDasharray: '90%',
    angle: {'250': '-34'},
    duration: 4000,
    easing: 'expo.inout'
}).then({
    ...stages[1],
    angle: {'-34': '250'}
}).then({
    ...stages[2],
    angle: {'250': '-34'}
}).then({
    ...stages[3],
    radius: {'100': '50'},
    strokeDasharray: {'90%': '80%'},
    angle: {'-34': '-16'}
}).then({
    ...stages[4],
    angle: {'-16': '268'}
}).then({
    ...stages[5],
    angle: {'268': '-16'}
}).then({
    ...stages[6],
    radius: {'50': '140'},
    strokeDasharray: {'80%': '90%'},
    angle: {'-16': '-34'}
}).then({
    ...stages[7],
    angle: {'-34': '250'}
}).then({
    ...stages[8],
    radius: {'140': '100'}
});

export {build};