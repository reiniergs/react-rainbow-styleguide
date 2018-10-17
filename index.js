const pkgConfig = require('./styleguide.config');

module.exports = function withReactRainbowStyles(styleguideConfig) {
    return Object.assign({}, pkgConfig, styleguideConfig);
};
