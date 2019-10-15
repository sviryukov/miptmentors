import mojs from '@mojs/core';
import stages from "../stages";
import theme from "../../../../../theme";

const build = () => new mojs.Shape({
    ...stages[0],
    fill: 'none',
    radius: 70,
    stroke: theme.palette.secondary.main,
    strokeLinecap: 'round',
    strokeWidth: 15,
    strokeDasharray: '75%',
    angle: {'20': '250'}
}).then({
    ...stages[1],
    angle: {'250': '20'}
}).then({
    ...stages[2],
    angle: {'20': '250'}
}).then({
    ...stages[3],
    radius: {'70': '140'}
}).then({
    ...stages[4],
    angle: {'250': '-45'}
}).then({
    ...stages[5],
    angle: {'-45': '250'}
}).then({
    ...stages[6],
    radius: {'140': '100'}
}).then({
    ...stages[7],
    angle: {'250': '20'}
}).then({
    ...stages[8],
    radius: {'100': '70'}
});

export {build};