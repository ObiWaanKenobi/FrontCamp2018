module.exports = function (source) {
    const sourceObject = JSON.parse(source);
    const omitNumbers = obj => Object.entries(obj)
        .reduce((object, entry) => {
            const key = entry[0];
            const value = entry[1];
            if (typeof value !== 'number') {
                if (value instanceof Array) {
                    object[key] = value.filter(elem => typeof elem !== 'number');
                } else if (value instanceof Object) {
                    object[key] = omitNumbers(value);
                } else {
                    object[key] = value;
                }
            }
            return object;
        }, {});

    const omittedObj = omitNumbers(sourceObject);
    this.emitFile('testLoader.json', JSON.stringify(omittedObj, null, 2));

    return source;
};
