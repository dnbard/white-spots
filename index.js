const seed = require('seed-random');

const { getHeightMap, getTilesFromHeight } = require('./core/map');
const { drawSimplexMap } = require('./core/draw');

const LEVEL = 0;
const MOUNTAIN_LEVEL = 0.45;

const heightMap = getHeightMap({
    width: 120,
    height: 40,
    seed: Math.random(),
    octaveX: 12,
    octaveY: 10
});

const tilesMap = getTilesFromHeight({
    heightMap,
    level: LEVEL,
    mountainLevel: MOUNTAIN_LEVEL
});

drawSimplexMap({
    heightMap,
    tilesMap,
    level: LEVEL,
    mountainLevel: MOUNTAIN_LEVEL
});