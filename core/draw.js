const colors = require('colors');

const { choice } = require('./random');

function getWater(){
    const color = choice(colors.blue, colors.cyan);
    return color(choice('-', '~'));
}

function getTerrain(){
    const color = choice(colors.green, colors.yellow);
    return color(choice('.', ';', ':', ',', '|'));
}

function formBasicString(mapArray, level, mountainLevel){
    return mapArray.map(e => e > level ?
        e > mountainLevel ? '^' : getTerrain() : getWater()).join('');
}

exports.drawSimplexMap = function({ map, level, mountainLevel }){
    return map.map(e => formBasicString(e, level, mountainLevel)).forEach(e => console.log(e));
}
