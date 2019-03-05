var mkdirp, path,
  __hasProp = {}.hasOwnProperty;

path = require('path');

mkdirp = require('mkdirp');

module.exports = function(grunt) {
  var bfdocsBin, buildOptionsArgs, deleteManifestFile, isNotReservedFlag, manifestFilename, notEmpty, strToHyphen, writeManifestFile, _;
  _ = grunt.util._;
  bfdocsBin = "" + __dirname + "/../node_modules/beautiful-docs/bin/bfdocs";
  grunt.registerMultiTask('bfdocs', 'Generate beautiful markdown documentation using Grunt', function() {
    var args, bfdocs, done, filename, manifestData, manifestOptions, manifests, node, options, spawn;
    node = process.execPath;
    done = this.async();
    manifestData = null;
    manifests = [];
    filename = null;
    options = this.options({
      manifest: null,
      dest: './out',
      server: false,
      port: 8080,
      watch: false,
      manifestsOnly: false,
      title: 'Beautiful Docs',
      baseUrl: '',
      indexOnly: false,
      theme: 'default',
      bfdocsBinary: bfdocsBin
    });
    manifestOptions = {
      rootDir: null
    };
    bfdocs = {
      cmd: node,
      grunt: false,
      args: null
    };
    args = [options.bfdocsBinary];
    if (options.manifest != null) {
      if (Array.isArray(options.manifest) || typeof options.manifest === 'string') {
        grunt.file.expand(options.manifest).forEach(function(file) {
          return manifests.push(file);
        });
        if (manifests.length > 1) {
          options.manifestsOnly = true;
        }
      } else if (typeof options.manifest === 'object') {
        manifestData = options.manifest;
        if (Array.isArray(manifestData.files)) {
          manifestData.files = grunt.file.expand(manifestData.files).filter(function(file) {
            return grunt.file.isFile(file);
          });
        }
      }
    } else {
      grunt.fail.fatal("'manifest' option is required");
    }
    if (Array.isArray(this.files) && this.files.length && (manifestData != null)) {
      this.files.forEach(function(file) {
        var files;
        if (file.dest && options.dest === './out') {
          options.dest = file.dest;
        }
        files = file.src.filter(function(file) {
          return grunt.file.isFile(file);
        });
        if (!Array.isArray(manifestData.files)) {
          manifestData.files = [];
        }
        return manifestData.files.concat(files);
      });
    }
    if (manifestData != null) {
      writeManifestFile(filename = manifestFilename(), manifestData);
      manifests.push(filename);
    }
    args = args.concat(buildOptionsArgs(options), manifests, [options.dest]);
    mkdirp.sync(options.dest);
    bfdocs.args = args;
    grunt.verbose.writeln("Executing command: \n" + bfdocs.cmd + "\n" + (bfdocs.args.join(' ')));
    if (options.server) {
      grunt.log.writeln("Documentation server listening in port: " + options.port);
    }
    return spawn = grunt.util.spawn(bfdocs, function(error, result, code) {
      if (error) {
        grunt.fail.fatal("cannot run the task: " + error, 3);
        done();
        return;
      }
      grunt.log.writeln("Documentation generated in: " + options.dest);
      if (filename) {
        deleteManifestFile(filename);
      }
      done();
      return process.on('exit', function() {
        return spawn.kill('SIGKILL');
      });
    });
  });
  manifestFilename = function() {
    return "bfdocs-manifest-" + (new Date().getTime()) + ".json";
  };
  writeManifestFile = function(filename, data) {
    var e;
    try {
      grunt.verbose.writeln("Creating manifest temporary file: " + filename);
      return grunt.file.write(filename, JSON.stringify(data, null, 4));
    } catch (_error) {
      e = _error;
      return grunt.fail.fatal("cannot write the temporal manifest file:\n" + e.message);
    }
  };
  deleteManifestFile = function(filepath) {
    return grunt.file["delete"](filepath, {
      force: true
    });
  };
  isNotReservedFlag = function(flag) {
    return ['manifest', 'dest'].indexOf(flag) === -1;
  };
  notEmpty = function(value) {
    if (value != null) {
      if (typeof value === 'string') {
        if (value.length) {
          return true;
        }
      } else {
        return true;
      }
    }
    return false;
  };
  buildOptionsArgs = function(options) {
    var args, flag, value;
    args = [];
    for (flag in options) {
      if (!__hasProp.call(options, flag)) continue;
      value = options[flag];
      if (!(notEmpty(flag) && isNotReservedFlag(flag))) {
        continue;
      }
      flag = strToHyphen(flag);
      if (typeof value === 'boolean') {
        if (value === true) {
          args.push("--" + flag);
        }
      } else {
        if (typeof value === 'string' && value.length) {
          if (value.indexOf(' ') !== -1) {
            value = '"' + value + '"';
          }
          args.push("--" + flag + "=" + value);
        }
      }
    }
    return args;
  };
  return strToHyphen = function(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };
};
