// Jest doesn't like .babelrc for some reason, but will transpile properly when babel.config.js
// TODO Add env support to make package.json scripts smaller

module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    "targets": {
                        "esmodules": true
                    }
                }
            ]
        ],
        plugins: [
            [
                '@rajzik/babel-plugin-styled-components',
                {
                    pure: true,
                    displayName: true,
                    preprocess: false,
                    namespace: 'TRQC'
                }
            ]
        ]
    };
};
