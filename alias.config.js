const resolve = (dir) => {
    return require('path').join(__dirname, dir);
};

module.exports = {
    resolve: {
        alias: {
            '@': resolve('src')
        }
    }
};
