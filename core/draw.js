const colors = require('colors');

const { choice } = require('./random');

const TILES = require('../enums/tiles');

function getWater(){
    const color = choice(colors.blue, colors.cyan);
    return color(choice('-', '~'));
}

function getTerrain(){
    const color = choice(colors.green, colors.yellow);
    return color(choice(' ', '.', ';', ':', ',', '|'));
}

function formBasicString(mapArray){
    return mapArray.map(el => {
        switch(el){
            case TILES.MOUNTAIN: return '^';
            case TILES.PLAIN: return getTerrain();
            case TILES.WATER: return getWater();
        }
    }).join('');
}

exports.drawSimplexMap = function({ heightMap, tilesMap, level, mountainLevel }){
    return tilesMap.map(e => formBasicString(e))
        .forEach(e => console.log(e));
}
