const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  "mode": "development",
  "entry": "src/index.tsx",
  "output": {
      "path": __dirname+'/dist',
      "filename": "[name].js"
  },
  "watch": false,
  "context": __dirname, // to automatically find tsconfig.json
  "module": {
      "rules": [
          {
              "test": /\.tsx?$/,
              "exclude": /node_modules/,
              "use": {
                  "loader": "ts-loader",
              }
          }
      ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      },
    extensions: [".js", ".ts", ".tsx"],
    plugins: [
      new TsconfigPathsPlugin({
        logLevel: "info",
        mainFields: "module",
        extensions: [".js", ".ts", ".tsx"]
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <body>
            <div id='root'></div>
          </body>
        </html>
      `
    }),
  ]
}
