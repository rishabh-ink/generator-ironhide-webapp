# generator-ironhide-webapp

> A [Yeoman](http://yeoman.io) generator for developing a webapp with Bower, Gulp, jQuery, Karma with Jasmine, RequireJS, Ruby Sass with Compass & scss-lint, living style guide generator with Hologram, Travis build and Heroku deployment.

[![Travis](https://img.shields.io/travis/rishabhsrao/generator-ironhide-webapp.svg?style=flat-square "Build status")](https://travis-ci.org/rishabhsrao/generator-ironhide-webapp)
[![npm](https://img.shields.io/npm/v/generator-ironhide-webapp.svg?style=flat-square "npm version")](https://www.npmjs.com/package/generator-ironhide-webapp)
[![David](https://img.shields.io/david/rishabhsrao/generator-ironhide-webapp.svg?style=flat-square "Dependency status (Node modules)")](https://david-dm.org/rishabhsrao/generator-ironhide-webapp)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square "MIT license &copy; Rishabh Rao")](license.md)


## :rowboat: Getting Started

You'll need the [Bundler](http://bundler.io) Ruby gem before you start.

1. Install this generator as a global module:
  ```bash
  npm install -g generator-ironhide-webapp
  ```

2. Initiate the generator:
  ```bash
  yo ironhide-webapp
  ```

3. Install the Ruby gems manually:
  ```bash
  bundle install
  ```
  This will be automated in future release.


## :star: Features

### Gulp build system

All the Gulp tasks are neatly organized into a [`tasks`](app/templates/tasks) directory.

They provide the following benefits:

  * **Image minification** with **imagemin**
  * **JavaScript linting** with **JSHint**
  * **JavaScript & JSON minification** with **UglifyJS**
  * **RequireJS optimization** with **r.js optimizer**
  * **JavaScript unit** testing with **Jasmine** running via **Karma**
  * **JavaScript test** coverage reporting with **Istanbul**
  * **Live reloading** with **BrowserSync**
  * **Sass compilation** with **Compass**
  * **Sass linting** with **scss-lint**
  * **Living style guide generation** with **Hologram**

They also give out operating system notifications when they are completed or have errors.

### Testing

[Jasmine](http://jasmine.github.io) and [Karma](http://karma-runner.github.io) are [setup](app/templates/karmarc) to work with RequireJS modules.

### Automated build and deployment

Out-of-the-box support is available for automated builds on [Travis CI](https://travis-ci.org). Travis is also [configured](app/templates/travis.yml) to deploy directly to [Heroku](https://www.heroku.com) on the [free tier](https://blog.heroku.com/archives/2015/5/7/heroku-free-dynos), whenever you push a Git tag.


## :scroll: License

[MIT license](license.md) &copy; [Rishabh Rao](http://rishabhsrao.github.io).

---
