# grunt-buildcom-cssproc

> Grunt wrapper for cssproc node.js modules

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buildcom-cssproc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buildcom-cssproc');
```

## The "cssproc" task

### Overview
In your project's Gruntfile, add a section named `cssproc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssproc: {
    options: {
      // Task-specific options go here.
      base: 'http://foo.com'
    },
    files: {
      src: 'css/**/*.css'
    }
  },
})
```

### Options

#### options.base
Type: `String` or `Array`
Default value: null

One or more hostnames


### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  cssproc: {
    options: {
      base: ['http://foo.bar.com', 'http://bar.foo.com']
    },
    files: {
      src: 'assetnodes/foo.com/css/**/*.css'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
