/* eslint-env node */
module.exports = {
  plugins: [
    require('postcss-preset-env')({
      stage: 3,
    }),
    require('cssnano'),
  ],
};
