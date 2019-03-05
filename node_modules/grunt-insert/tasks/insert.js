/*
 * grunt-injector
 * https://github.com/grunt-injector
 *
 * Copyright (c) 2013 Jamie Popkin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('insert', 'Insert code from one file into another.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
				removeComments: true
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			// Read source file
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				return grunt.file.read(filepath); // Read file source.
			});

			// Read destination file
			if (!grunt.file.exists(f.dest)) {
				grunt.log.warn('Destination file "' + f.dest + '" not found.');
			} else {
				var dest = grunt.file.read(f.dest); // Read file source.
			}

			var result = dest.replace(f.match,src);

			// Write the temporary destination file.
			grunt.file.write(f.dest+"_tmp", result);

			// overwrite the original with the temporary file
			grunt.file['delete'](f.dest);
			grunt.file.copy(f.dest+"_tmp", f.dest);
			grunt.file['delete'](f.dest+"_tmp");

			// Print a success message.
			var input = f.src.toString().replace(/.*\//,""); // Remove path
			var output = f.dest.toString().replace(/.*\//,""); // Remove path
			grunt.log.writeln("Injected " + input + " into " + output);
		});
	});

};
