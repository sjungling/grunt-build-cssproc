/*
 * grunt-buildcom-cssproc
 * https://github.com/sjungling/grunt-buildcom-cssproc
 *
 * Copyright (c) 2013 Scott Jungling
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    cssproc: {
      build: {
        options: {
          base: ['http://foo.bar.com/','http://bar.foo.com/']
        },
        src: ['test/fixtures/**/*.css']
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['cssproc']);

};
