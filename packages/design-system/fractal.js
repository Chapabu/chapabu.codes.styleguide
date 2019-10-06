/* eslint-env node */
const fractal = (module.exports = require('@frctl/fractal').create()); // eslint-disable-line
const mandelbrot = require('@frctl/mandelbrot');
const path = require('path');

/**
 * PROJECT
 */
fractal.set('project.title', 'Chapabu.codes');

/**
 * TEMPLATE ENGINE
 */
const twig = require('@frctl/twig')();

fractal.components.engine(twig);
fractal.components.set('ext', '.twig');
// fractal.components.set('default.preview', '@preview');

/**
 * SOURCES
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));
fractal.web.set('static.mount', '/assets');

// Twig doesn't work for documentation pages, so we'll leave it as Nunjucks.
// @see https://github.com/frctl/twig/issues/19
fractal.docs.engine('@frctl/nunjucks');
fractal.docs.set('path', path.join(__dirname, 'src/docs'));
fractal.web.set('static.path', path.join(__dirname, 'dist'));

/**
 * BUILD
 */
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

/**
 * SERVER
 */
fractal.web.set('server.sync', true);

/**
 * THEME
 */

const theme = mandelbrot({
  nav: ['docs', 'components'],
});

fractal.web.theme(theme);
