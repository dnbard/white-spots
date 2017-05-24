const perlin = require('./perlin');

const TILES = require('../enums/tiles');

exports.getHeightMap = function({ width, height, seed, octaveX = 20, octaveY = 20 }){
    if (seed){
        perlin.seed(seed);
    }

    let result = [];

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const value = perlin.perlin2(x / octaveX, y / octaveY);

            if (!result[y]){
                result[y] = [];
            }

            result[y][x] = value;
        }
    }

    return result;
}

exports.getTilesFromHeight = function({ heightMap, level, mountainLevel }){
    return heightMap.map(arr => {
        return arr.map(el => el > level ? el > mountainLevel ? TILES.MOUNTAIN : TILES.PLAIN : TILES.WATER);
    });
}
