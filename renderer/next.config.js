const path = require("path")

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.target = "electron-renderer"
        }

        config.resolve.alias["@"] = path.join(__dirname, "renderer")

        return config
    },
}
