module.exports = {
      entry: './js/main.js',
      output: {
            path: `${__dirname}/dist`,
            filename: 'bundle.js'
      },
      watch: true,
      mode: "development", //ta opcja zostanie pominięta jeżeli użyjemy npm run build
      devtool: "source-map",
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                              loader: 'babel-loader',
                              options: {
                                    presets: [["env", {
                                          targets: {
                                                browsers: ['> 1%', 'last 2 versions']
                                          }
                                    }]]
                              }
                        }
                  }
            ]
      }
}