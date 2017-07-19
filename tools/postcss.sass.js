module.exports = ctx => ({

  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: [

    // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
    // https://github.com/postcss/postcss-import
    require('postcss-import')(),
    require('precss')(),
    require('postcss-mixins')(),

    // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
    // https://github.com/postcss/postcss-media-minmax
    require('postcss-media-minmax')(),

    // Postcss flexbox bug fixer
    // https://github.com/luisrudge/postcss-flexbugs-fixes
    require('postcss-flexbugs-fixes')(),

    // Add vendor prefixes to CSS rules using values from caniuse.com
    // https://github.com/postcss/autoprefixer
    // browsers are specified in package.json/browserslist
    require('autoprefixer')(),
  ],
});
