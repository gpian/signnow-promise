module.exports = settings => {
    return {
        document: {
            create: (obj, callback) => callback(null, obj)
        }
    };
}