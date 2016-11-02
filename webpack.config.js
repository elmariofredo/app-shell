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
        { test: /\.ts$/, loaders: [ 'awesome-typescript-loader' ], exclude: /node_modules/ },
      ]
    },

    devServer: {
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:9001'
        }
      }
    }

  }
};