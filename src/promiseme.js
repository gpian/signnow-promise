module.exports = callbacks => {
    const promises = {};
    deepPromise(callbacks, promises);
    return promises;
};

function deepPromise(input, output) {
    Object.keys(input).forEach(key => {
        if (typeof input[key] === 'object') {
            output[key] = {};
            deepPromise(input[key], output[key]);
        } else if (typeof input[key] === 'function') {
            output[key] = obj => {
                return new Promise((resolve, reject) => {
                    input[key](obj, (err, res) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(res);
                        }
                    });
                });
            }
        }
    });
}
