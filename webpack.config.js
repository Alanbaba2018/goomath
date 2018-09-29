const path = require('path');

module.exports = {
  entry: "./index.ts",
  output: {
      filename: "goomath.js",
      path: path.resolve(__dirname,'./')
  },
  resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: [".tsx", ".ts", ".js"]
  },
  module: {
      rules: [{ 
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }]
  }
};