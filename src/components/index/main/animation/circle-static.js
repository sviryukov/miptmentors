import mojs from '@mojs/core';
import theme from "../../../../theme";

const build = () => new mojs.Shape({
    parent: document.getElementById('animation'),
    fill: 'none',
    radius: 191,
    stroke: theme.palette.secondary.main,
    strokeWidth: 6,
    strokeDasharray: '100%'
});

export { build };