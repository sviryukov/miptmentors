import mojs from '@mojs/core';
import stages from "../stages";

const build = () => new mojs.Shape({
    ...stages[0],
    fill: 'none',
    radius: 170,
    stroke: 'magenta',
    strokeLinecap: 'round',
    strokeWidth: 8,
    strokeDasharray: '100%',
    strokeDashoffset: '85%',
    angle: {'-27': '90'}
}).then({
    ...stages[1],
    angle: {'90': '-27'}
}).then({
    ...stages[2],
    angle: {'-27': '90'}
}).then({
    ...stages[3],
    radius: {'170': '80'}
}).then({
    ...stages[4],
    angle: {'90': '-67'}
}).then({
    ...stages[5],
    angle: {'-67': '90'}
}).then({
    ...stages[6],
    radius: {'80': '30'},
    strokeDashoffset: {'85%': '75%'},
    angle: {'90': '72'}
}).then({
    ...stages[7],
    angle: {'72': '-45'}
}).then({
    ...stages[8],
    radius: {'30': '170'},
    strokeDashoffset: {'75%': '85%'},
    angle: {'-45': '-27'}
});

export {build};