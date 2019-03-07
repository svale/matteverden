const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const cssNano = require('cssnano');

module.exports = ({ env }) => ({
  // map: ctx.env === 'development' ? ctx.map : false,
  // purge: ctx.env === 'development' ? ctx.map : false,
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    env === 'production'
      ? purgecss({
          content: ['./src/**/*.vue', './public/index.html'],
          extractors: [
            {
              extractor: class TailwindExtractor {
                static extract(content) {
                  return content.match(/[A-z0-9-:\/]+/g) || [];
                }
              },
              extensions: ['vue', 'html']
            }
          ]
        })
      : false,
    env === 'production' ? cssNano() : false,
    autoprefixer
  ]
});
