// const mdvueloader = require('./src/index')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./test/index.js',
    output:{
      filename:'bundle.js'
    },
    mode:"development",
    plugins: [
      new VueLoaderPlugin()
  ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
              {
                  loader: 'vue-loader',
                  // options: {
                  //     compilerOptions: {
                  //         preserveWhitespace: false,
                  //     },
                  // },
              },
          ],
      },
        { test: /\.md$/,
          use: [
            'vue-loader', {loader: path.resolve(__dirname, './src/index.js'),}]}
      ]}
}