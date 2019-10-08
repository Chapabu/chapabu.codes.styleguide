const { task, parallel, series } = require('gulp');
const styleTasks = require('./tasks/styles');

Object.values(styleTasks).forEach(task);

const build = parallel(styleTasks.buildStyles);

build.displayName = 'build:all';

const watch = () => {
  styleTasks.watchStyles();
};

watch.displayName = 'watch:all';

const defaultTask = series(build, watch);

defaultTask.displayName = 'default';

module.exports = {
  build,
  watch,
  defaultTask,
};
