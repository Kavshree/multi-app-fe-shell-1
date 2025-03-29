const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'hotel-reservation-system',
  filename: 'remoteEntry.js',
  remotes: {
    './Component': './src/app/app.component.ts',
  },
  shared: {
    ...shareAll(
      { singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      'kavya-myuser-service-library': {
      singleton: true,
      strictVersion: false,
      requiredVersion: '^0.0.1'
    }
  },
});
