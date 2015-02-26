# generator-react-6 [![Build Status](https://secure.travis-ci.org/darklight721/generator-react-6.png?branch=master)](https://travis-ci.org/darklight721/generator-react-6)

> [Yeoman](http://yeoman.io) generator for facebook's React framework with es6 support.

## Getting Started

```
$ npm install -g yo                       # Install Yeoman (if you don't have it yet)...
$ npm install -g generator-react-6        # ...then install this generator...
$ yo react-6                              # ...and run it.
```

You can run the last command with `--skip-install` if you wish to skip
the installation of `npm` and `bower` dependencies.   
Also make sure that you have `ruby` with `sass (>= 3.4)` gem installed.   
Now, when everything is ready, you can run these tasks to help you develop your React components.

```
$ yo react-6:component [ComponentName]    # generates a react component with the given name
$ gulp watch                              # starts up the local server and auto-reloads the browser
$ gulp test                               # runs the test specs, available only if jest is included
$ gulp build:production                   # minifies your app, ready for production
$ gulp serve:production                   # to preview the built files
```

## What's inside?

Bundled:

* React
* Gulp
* Browserify
* Watchify
* Babelify
* Bower
* Sass

Optional:

* Bootstrap - Twitter Bootstrap's official Sass version
* Modernizr
* Jest for unit tests

## License

MIT
