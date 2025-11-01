/**
 * Webpack configuration file.
 *
 */

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const CopyPlugin = require("copy-webpack-plugin");
const RtlCssPlugin = require("rtlcss-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

// Directory paths
const JS_DIR = path.resolve(__dirname, "assets/src/js");
const IMG_DIR = path.resolve(__dirname, "assets/src/images");
const BUILD_DIR = path.resolve(__dirname, "assets/build");

const entry = {
  editor: path.join(JS_DIR, "editor.js"),
  main: path.join(JS_DIR, "main.js"),
};

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    ...defaultConfig,
    entry,
    output: {
      path: BUILD_DIR,
      filename: "js/[name].js",
    },
    module: {
      ...defaultConfig.module,
      rules: [
        // Keep all default rules except the ones we explicitly want to override
        ...defaultConfig.module.rules.map(rule => {
          const test = rule.test?.toString() || '';
          
          // Replace the default image and font rules with our custom ones
          if (test.includes('png') || test.includes('jpg') || test.includes('jpeg') || 
              test.includes('gif') || test.includes('svg') || test.includes('ico') ||
              test.includes('woff') || test.includes('ttf') || test.includes('eot')) {
            return null; // Remove this rule, we'll add our custom ones below
          }
          
          return rule;
        }).filter(Boolean), // Remove null entries
        
        // Custom image rule - no content hash
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        // Custom font rule - no content hash
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      // Remove default CSS-related plugins and optimizations
      ...defaultConfig.plugins.filter((plugin) => {
        const pluginName = plugin.constructor.name;
        return (
          pluginName !== "MiniCssExtractPlugin" && 
          pluginName !== "RtlCssPlugin"
        );
      }),

      // Custom CSS extraction
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),

      // RTL CSS generation
      new RtlCssPlugin({
        filename: "css/[name]-rtl.css",
      }),

      // Remove empty JS files
      new RemoveEmptyScriptsPlugin({
        stage: RemoveEmptyScriptsPlugin.STAGE_AFTER_PROCESS_PLUGINS,
      }),

      // Copy static assets
      new CopyPlugin({
        patterns: [
          {
            from: "assets/src/library",
            to: "library",
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    externals: {
      ...defaultConfig.externals,
      jquery: "jQuery",
    },
    resolve: {
      ...defaultConfig.resolve,
      alias: {
        ...defaultConfig.resolve.alias,
        "@": JS_DIR,
        "@images": IMG_DIR,
      },
    },
    // Disable content hashing and configure optimization conditionally
    optimization: {
      ...defaultConfig.optimization,
      realContentHash: false,
      minimize: isProduction, // Only minimize in production mode
      minimizer: [
        // Use terser for JS (keep default)
        ...defaultConfig.optimization.minimizer.filter(plugin => 
          plugin.constructor.name !== 'CssMinimizerPlugin' && 
          plugin.constructor.name !== 'TerserPlugin'
        ),
        // Custom Terser configuration for JS
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: isProduction, // Remove console.log only in production
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        // CSS minification only in production
        ...(isProduction ? [
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  discardComments: { removeAll: true },
                },
              ],
            },
          })
        ] : []),
      ],
    },
  };
};