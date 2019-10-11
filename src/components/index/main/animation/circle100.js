import theme from "../../../../theme";

const build = () => new mojs.Shape({
    parent: document.getElementById('animation'),
    fill: 'none',
    radius: 30,
    stroke: theme.palette.secondary.main,
    strokeLinecap: 'round',
    strokeWidth: 5,
    strokeDasharray: '100%',
    strokeDashoffset: '-100%',
    angle: '90',
    duration: 13000
}).then({
    strokeDashoffset: {'-100%': '100%'},
    angle: {'-90': '90'},
    duration: 8000,
    easing: 'cubic.inout'
}).then({
    duration: 6000
});

export { build };