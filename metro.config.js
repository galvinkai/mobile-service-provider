const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
    const config = getDefaultConfig(__dirname);

    const { transformer, resolver } = config;

    // Add nativewind configuration
    withNativeWind(config);

    // Add react-native-svg-transformer configuration
    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
    };
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [
            ...resolver.sourceExts,
            "svg",
            "expo.ts",
            "expo.tsx",
            "expo.js",
            "expo.jsx",
            "ts",
            "tsx",
        ],
    };

    return config;
})();
