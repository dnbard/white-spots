exports.choice = function(...choices){
    const count = choices.length;
    const index = Math.floor(Math.random() * count);
    return choices[index];
}