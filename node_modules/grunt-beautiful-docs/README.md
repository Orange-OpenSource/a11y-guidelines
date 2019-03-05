# grunt-beautiful-docs [![Build Status](https://travis-ci.org/h2non/grunt-beautiful-docs.png)][travis] [![Dependency Status](https://gemnasium.com/h2non/grunt-beatiful-docs.png)][dependencies] [![NPM version](https://badge.fury.io/js/grunt-beautiful-docs.png)][badge]

Generate beautiful markdown-based documentation using Grunt

## Getting started

This plugin helps you to generate beautiful documentation based on markdown files using [Beautiful docs][1] from Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-beautiful-docs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile:

```js
grunt.loadNpmTasks('grunt-beautiful-docs');
```

This plugin requires Grunt `~0.4.0`

## The "bfdocs" task

_Run this task with the `grunt bfdocs` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide

### Usage example

##### Gruntfile configuration
```js
grunt.initConfig({
  bfdocs: {
    documentation: {
      options: {
        title: 'My Beautiful Documentation',
        manifest: 'manifest.json',
        dest: 'documentation/',
        theme: 'default'
      }
    }
  }
})
```

Example manifest.json:
```json
{
    "title": "My Beautiful Documentation",
    "files": [
      "README.md",
      "GUIDE.md",
      "CHANGELOG.md"
    ]
}
```

_See [Gruntfile][gruntfile] and [test][test] for more configuration examples_


### Options

#### dest
Type: `string`
Default: null

Path to the documentation output directory.

Usually you should use the Grunt file config object to define the destination output directory,
but if you declare this option, it will have preference

#### manifest
Type: `string`|`object`|`array`
Default: null

It can be an `object` like the manifest config or a string with the path to manifest.json file

For more information about manifest.json config options, see the Beautiful Docs [documentation][2]

#### server
Type: `boolean`
Default: false

Create an HTTP server to access the generated documentation

#### port
Type: `number`
Default: '8080'

The port on which the HTTP server shoud listen. It will be used only if the `server` option is `true`

#### watch
Type: `boolean`
Default: false

Watch files for modifications and reload them automatically

#### theme
Type: `string`
Default: 'default'

Name of bundled theme or path to custom theme

#### title
Type: `string`
Default: 'Beautiful docs'

Title of the index page. It can be also defined from the manifest.json file

#### baseUrl
Type: `string`
Default: ''

Base url of all links

#### indexOnly
Type: `boolean`
Default: false

Only generate the index file. The last argument should be the filename of the index

#### manifestsOnly
Type: `boolean`
Default: false

Do not treat the last argument as the output dir but also as a manifest

#### bfdocsBinary
Type: `string`
Default: `node_modules/beautiful-docs/bin/bfdocs`

Use a custom `beautiful-docs` binary path

## Contributing

Instead of a formal styleguide, take care to maintain the existing coding style.

Add unit tests for any new or changed functionality

### Development

Clone the repository
```shell
$ git clone https://github.com/h2non/grunt-beautiful-docs.git && cd grunt-beautiful-docs
```

Install dependencies
```shell
$ npm install
```

Run tests
```shell
$ npm test
```

## Release History

- **0.1.0** `2013-12-12`
    - Initial release

## To Do

Do you miss something? Open an issue or make a PR!

## Authors

* [Tomas Aparicio](http://github.com/h2non)

## License

Copyright (c) 2013 Tomas Aparicio

Released under MIT license

[1]: http://beautifuldocs.com/
[2]: https://github.com/maximebf/beautiful-docs#manifests
[gruntfile]: https://github.com/h2non/grunt-beautiful-docs/blob/master/Gruntfile.coffee
[test]: https://github.com/h2non/grunt-beautiful-docs/tree/master/test
[travis]: https://travis-ci.org/h2non/grunt-beautiful-docs
[badge]: http://badge.fury.io/js/grunt-beautiful-docs
[dependencies]: https://gemnasium.com/h2non/grunt-beautiful-docs

