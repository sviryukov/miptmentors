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
    angle: {'153': '270'}
}).then({
    ...stages[1],
    angle: {'270': '153'}
}).then({
    ...stages[2],
    angle: {'153': '270'}
}).then({
    ...stages[3],
    radius: {'170': '80'}
}).then({
    ...stages[4],
    angle: {'270': '113'}
}).then({
    ...stages[5],
    angle: {'113': '270'}
}).then({
    ...stages[6],
    radius: {'80': '30'},
    strokeDashoffset: {'85%': '45%'},
    angle: {'270': '198'}
}).then({
    ...stages[7],
    angle: {'198': '81'}
}).then({
    ...stages[8],
    radius: {'30': '170'},
    strokeDashoffset: {'45%': '85%'},
    angle: {'81': '153'}
});

export { build };