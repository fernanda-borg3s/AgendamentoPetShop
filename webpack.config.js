const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: "web",
    mode: "development",
    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open:true,
        liveReload: true,
    },
    ignoreWarnings: [
        {
            module: /node_modules[\\/]bootstrap[\\/]/
        },
        {
            module: /node_modules[\\/]css-loader[\\/]/
        },
        {
            module: /node_modules[\\/]postcss-loader[\\/]/
        },
        {
            module: /node_modules[\\/]sass-loader[\\/]/
        }
    ],
    infrastructureLogging: {
        level: 'error'
    },
     plugins: [
        new HtmlWebpackPlugin({ 
        template: path.resolve(__dirname, "index.html"),
        favicon: path.resolve(__dirname, "src", "assets", "Logo.png" ) 
    }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, "src", "assets"), 
                    to: path.resolve(__dirname, "dist", "src", "assets") 
                }
            ]
        })
    ],
    module:{
        rules:[
            {
                 test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  'mixed-decls',
                  'color-functions',
                  'global-builtin',
                  'import'
                ]
              }
            }
          }
        ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
