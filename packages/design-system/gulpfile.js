const { task, parallel } = require('gulp');
const styleTasks = require('./tasks/styles');

Object.values(styleTasks).forEach(task);

task('default', () => {
  styleTasks.watchStyles();
});
