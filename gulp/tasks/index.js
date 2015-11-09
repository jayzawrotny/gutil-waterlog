/**
 * Load all the tasks in the directory.
 */
import glob from 'glob';
import path from 'path';
import log from '../../src';
import paths from '../config/paths';


var files = [],
    tasks = {},
    options;

/**
 * Configure paths
 */
options = {
  cwd: __dirname
};

files = glob.sync('*.js', options);

/**
 * Filter the task files.
 */
files = files.filter(function (file) {
  /**
   * If the file is this file filter it out
   */
  if (file.indexOf('index.js') > -1) {
      return false;
  }

  return true;
});

/**
 * Loop through each file then import it if the module
 * could not be imported display an error message.
 */
files.forEach(function (filename) {
  var name = path.basename(filename, '.js');

  try {
    tasks[name] = require(path.join(__dirname, name));
  } catch (e) {
    log.error('tasks')
      .action(`Could not load ${filename}`)
      .line()
      .text(e)
      .send();
  }
});

export default tasks;