/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      /* Only use safe features + nesting */
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    require('cssnano'),
  ],
};
