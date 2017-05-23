const perlin = require('./perlin');

exports.getMap = function({ width, height, seed, octaveX = 20, octaveY = 20 }){
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
