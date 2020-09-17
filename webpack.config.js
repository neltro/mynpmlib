const config = {
    entry: ['./app/index.js'],
    output: {
      path: __dirname + '/build',
      filename: 'mynpmlibs.js'
    },
    module: {
      loaders: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/,
          query: {
             presets: ['es2015'] 
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: true
    }
}
module.exports = config;