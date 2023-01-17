const webpack = require("webpack");

module.exports = {
    "stories": [
        "../src/**/*.stories.tsx"
    ],
    "core": {
        "builder": "webpack5"
    },
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-essentials'
    ]
}