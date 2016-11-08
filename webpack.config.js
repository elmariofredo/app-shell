module.exports = () => {

  return {
    context: __dirname,
    entry: './main',
    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js'
    },

    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    },

    devtool: 'cheap-module-source-map',

    module: {
      loaders: [
        { test: /\.ts$/, loaders: [ 'awesome-typescript-loader' ] },
      ]
    },

    devServer: {
      historyApiFallback: true,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://app-shell-server:9001'
        }
      }
    }

  }
};