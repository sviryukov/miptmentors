import mojs from '@mojs/core';
import stages from "./stages";

const build = (color, stopStages, hideStages, widenStages) => {
    let points = [];
    let x = [];
    let y = [];
    let fill = [];
    let shift_x, shift_y;
    const points_count = Math.ceil(Math.random() * 2) + 2;
    for(let i = 0; i < points_count; i++){
        shift_x = Math.ceil(Math.random() * 10) + 30;
        shift_y = Math.ceil(Math.random() * 10) + 30;
        for(let j = 0; j < 9; j++){
            if(stopStages.indexOf(j - 1) !== -1){
                x[j] = x[j - 1];
                y[j] = y[j - 1];
            } else if(widenStages.indexOf(j - 1) !== -1){
                x[j] = x[j - 1] > 0 ? x[j - 1] + shift_x : x[j - 1] - shift_x;
                y[j] = y[j - 1] > 0 ? y[j - 1] + shift_y : y[j - 1] - shift_y;
            } else {
                x[j] = Math.ceil(Math.random() * 230) - 115;
                y[j] = Math.ceil(Math.random() * 230) - 115;
            }
            fill[j] = hideStages.indexOf(j) === -1 ? color : 'none';
        }
        points.push(new mojs.Shape({
            ...stages[0],
            radius: Math.ceil(Math.random() * 5) + 2,
            x: {[x[0]]: x[1]},
            y: {[y[0]]: y[1]},
            fill: {[fill[0]]: fill[1]}
        }));
        for(let j = 1; j < 8; j++){
            points[points.length - 1].then({
                ...stages[j],
                x: {[x[j]]: x[j + 1]},
                y: {[y[j]]: y[j + 1]},
                fill: {[fill[j]]: fill[j + 1]}
            });
        }
        points[points.length - 1].then({
            ...stages[8],
            x: {[x[8]]: x[0]},
            y: {[y[8]]: y[0]},
            fill: {[fill[8]]: fill[0]}
        });
    }
    return points;
};

export { build };