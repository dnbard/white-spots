const colors = require('colors');

const { choice, createChoice } = require('./random');

const TILES = require('../enums/tiles');
const CHOICES = require('../enums/choices');

createChoice(CHOICES.PLAIN, ' ', '.', ';', ':', ',', '|');
createChoice(CHOICES.WATER, '-', '~');
createChoice(CHOICES.MOUNTAIN, '^');

function getWater(){
    const color = choice(colors.blue, colors.cyan);
    return color(choice(CHOICES.WATER));
}

function getTerrain(){
    const color = choice(colors.green, colors.yellow);
    return color(choice(CHOICES.PLAIN));
}

function getMountain(){
    return choice(CHOICES.MOUNTAIN);
}

function formBasicString(mapArray){
    return mapArray.map(el => {
        switch(el){
            case TILES.MOUNTAIN: return getMountain();
            case TILES.PLAIN: return getTerrain();
            case TILES.WATER: return getWater();
        }
    }).join('');
}

exports.drawSimplexMap = function({ heightMap, tilesMap, level, mountainLevel }){
    return tilesMap.map(e => formBasicString(e))
        .forEach(e => console.log(e));
}
