const removeFromArray = function(...args) {
    const arr = args[0];
    return arr.filter(i => !args.includes(i));
}

module.exports = removeFromArray
