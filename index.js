const seed = require('seed-random');

const { getMap } = require('./core/map');
const { drawSimplexMap } = require('./core/draw');

const map = getMap({
    width: 120,
    height: 40,
    seed: Math.random(),
    octaveX: 12,
    octaveY: 10
});

drawSimplexMap({
    map,
    level: 0,
    mountainLevel: 0.45
});