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
const twig = require('@frctl/twig')({
  functions: {
    modify(baseClass, modifiers = []) {
      // Ensure we have an array of modifiers.
      const modifiersArray = Array.isArray(modifiers) ? modifiers : [modifiers];

      // Loop over them and prepend the baseclass.
      const classArray = modifiersArray.map(modifier => `${baseClass}--${modifier}`);
      classArray.unshift(baseClass);
      return classArray.join(' ');
    },
  },
});

fractal.components.engine(twig);
fractal.components.set('ext', '.twig');
// We manually set this as our base template lives under the _fractal subdirectory.
fractal.components.set('default.preview', '@preview');

/**
 * SOURCES
 */
fractal.components.set('path', path.join(__dirname, 'src/components'));

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
const mono = require('mono-fractal');

const theme = mono({
  nav: ['docs', 'components'],
});

fractal.web.theme(theme);
