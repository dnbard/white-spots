const ChoiceDictionary = {};

function _choice(...choices){
    const count = choices.length;
    const index = Math.floor(Math.random() * count);
    return choices[index];
}

function _choiceByArray(choices){
    const count = choices.length;
    const index = Math.floor(Math.random() * count);
    return choices[index];
}

exports.createChoice = function(name, ...choices){
    ChoiceDictionary[name] = choices;
}

exports.choice = function(...args){
    if (args.length === 1 && typeof args[0] === 'string'){
        return _choiceByArray(ChoiceDictionary[args[0]]);
    }

    return _choice(...args);
}
