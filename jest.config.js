module.exports = {
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ["js", "jsx"],
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/dist-esm/'],
    coverageDirectory: 'coverage',
    coverageReporters: ['json', 'text-summary', 'clover', 'html', 'lcov'],
    collectCoverageFrom: [
        'packages/*/src/**/*.{js,jsx}',
        '!packages/*/dist/**/*.{js,jsx}',
        '!packages/*/dist-esm/**/*.{js,jsx}',
        '!<rootDir>/node_modules/',
        '!<rootDir>/packages/*/dist/',
        '!packages/*/src/*.story.jsx',
        '!packages/*/src/index.js'
    ],
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        }
    }
};