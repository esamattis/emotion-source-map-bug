module.exports = {
    presets: ["next/babel"],
    plugins: [
        [
            "emotion",
            {
                sourceMap: true,
                autoLabel: true,
            },
        ],
    ],
};
