import federation from '@originjs/vite-plugin-federation';

export default {
    input: "src/index.js",
    plugins: [
        federation({
            filename: "remoteEntry.js",
            exposes: {
                "./Logger": "./src/logger.js"
            }
        }),
    ],
    output: {
        format: "esm",
        dir: "dist"
    },
};
