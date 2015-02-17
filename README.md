# generator-react-6 [![Build Status](https://secure.travis-ci.org/darklight721/generator-react-6.png?branch=master)](https://travis-ci.org/darklight721/generator-react-6)

> [Yeoman](http://yeoman.io) generator for facebook's React framework with es6 support.

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

## Getting Started

```
$ npm install -g yo                          # Install Yeoman (if you don't have it yet)...
$ npm install -g generator-react-6           # ...then install this generator...
$ yo react-6                                 # ...and run it.
```

Be sure to have ruby and sass gem installed with `gem install sass`.  
Now, when everything is ready, you can run these gulp tasks to help you develop your React components.

```
$ gulp watch                                 # to watch for changes and auto reloads the browser
$ gulp test                                  # to unit test your code if jest is included
$ gulp build:production                      # to build your app into minified files ready for production
$ gulp serve:production                      # to preview the built files
```

## License

MIT
