const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Merge default configuration and apply NativeWind
const config = mergeConfig(getDefaultConfig(__dirname), {
  // You can add your own configurations here if needed
});

module.exports = withNativeWind(config, { input: './global.css' });
