# grunt-insert

> Insert code from one file into another.

Useful when you want to build a single file containing everything it needs for initial rendering. Such as on mobile, where the number of requests directly effects user experience.
At the moment it only overwrites the destination file. So be careful to consider that in the build process.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-insert --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-insert');
```

## The "insert" task

### Overview
In your project's Gruntfile, add a section named `insert` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  insert: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

**This doesn't exist yet.**
#### options.backup
Type: `Boolean`
Default value: false

All for a backup file to be written for each build. It stores the original file before any and all injections.

### Usage Examples

#### Default Options
In this example the javascript is contained in a separate file for development purposes. Then stuffed in the *script* tag of the html file.

```js
grunt.initConfig({
  insert: {
    options: {},
	 main: {
		src: "lib/js/stuff.js",
		dest: "dist/html/index.html",
		match: "//Stuff it here"
	},
  },
});
```

Then in the destination file ,*index.html*, make sure you place the *match* string wherever you want source code to be placed. It could look something like this
```html
<!doctype html>
<html>
	<head>
		<script>
			//Stuff it here
		</script>
	</head>
	<body>
		Blah blah.
	</body>
</html>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
