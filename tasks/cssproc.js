/*
 * grunt-buildcom-cssproc
 * https://github.com/sjungling/grunt-buildcom-cssproc
 *
 * Copyright (c) 2013 Scott Jungling
 * Licensed under the MIT license.
 */

'use strict';
var cssproc = require('cssproc'),
  path = require('path'),
  fs = require('fs');

module.exports = function(grunt) {

  grunt.registerMultiTask('cssproc', 'Grunt wrapper for cssproc node.js modules', function() {
    grunt.verbose.writeln('CSSProc: Let\'s find us some files to munge');

    var options = this.options();

    if (options.base) {
      grunt.verbose.writeln('Found config[base]: ' + options.base);
    } else {
      grunt.fail.fatal('Missing required option: base');
    }

    this.filesSrc.forEach(function(file) {
      grunt.verbose.writeln('Found: ' + file);
      if (grunt.file.isFile(file)) {
        var data = grunt.file.read(file);
        cssproc.parse({
          root: __dirname,
          path: file,
          base: options.base
        }, data, function(err, str) {
          grunt.file.write(file, str);
          grunt.log.ok('Processed: ' + file);
        });
      } else {
        grunt.log.error(file + ' is not a file.');
      }

    });

    grunt.verbose.ok('CSSProc: Finished processing.');
  });

};