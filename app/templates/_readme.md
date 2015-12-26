# <%= props.appname %> [:star:](http://<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/dist)

> <%= props.description %>

[![Travis](https://img.shields.io/travis/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>.svg?style=flat-square "Build status")](https://travis-ci.org/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>)
[![Gemnasium](https://img.shields.io/gemnasium/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>.svg?style=flat-square "Dependency status")](https://gemnasium.com/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>)
[![Code Climate](https://img.shields.io/codeclimate/github/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>.svg?style=flat-square "Code Climate status")](https://codeclimate.com/github/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>)
[![Coveralls](https://img.shields.io/coveralls/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>.svg?style=flat-square "Test coverage status")](https://coveralls.io/r/<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](license.md)


## :star: Live demo

The live demo is hosted on [Heroku](http://www.heroku.com) at [<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/dist](http://<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/dist).


## :rowboat: Get started

This project depends on the following tools:

* [Node.js](http://nodejs.org)
* [Ruby](https://www.ruby-lang.org)
* [Bundler](http://bundler.io) gem

:tophat: **Tip** Use [nvm](https://github.com/creationix/nvm) and [rvm](http://rvm.io) for easy management of NodeJS and Ruby installations.

```
git clone git@github.com:<%= _.kebabCase(props.githubUsername) %>/<%= _.kebabCase(props.appname) %>.git <%= _.kebabCase(props.appname) %>
cd <%= _.kebabCase(props.appname) %>
npm install
bundle install
./node_modules/.bin/bower install
./node_modules/.bin/gulp serve && say awesome # Only on Mac OSX; use espeak on GNU/Linux. Windows users, sorry, no awesomeness for you!
```

:tophat: **Tip** If you have global installations of `bower` and `gulp`, then you can avoid typing the `./node_modules/.bin/` bit.

:tophat: **Tip** Downloading dependencies over `git://` may be blocked if you are behind a firewall. The solution is to configure Git to use `https://` instead of `git://`. It is important to do this globally otherwise it will not take effect on the nested Bower dependencies. Run the following to force Git to use HTTPS:

```
git config url.https://.insteadOf git://
# Undo using `git config --global --unset url.https://`
```


## :nut_and_bolt: Build

This project is built using [Gulp](http://gulpjs.com).

You can run a task using `./node_modules/.bin/gulp {{task-name}}`. The following build tasks are available:

* **build** Creates a build artifact, ready for deployment.
* **clean:deploy** Cleans all generated artifacts, except the distribution artifact.
* **clean** Cleans the distribution artifact and any other generated artifacts.
* **image:minify** Compresses the image files using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin).
* **script:lint** Lints the JavaScript files using [ESLint](http://eslint.org).
* **script:minify:json** Minifies the JSON files using [JSON Minify](https://www.npmjs.org/package/gulp-jsonminify).
* **script:minify** Minifies the JavaScript files using [UglifyJS](http://github.com/mishoo/UglifyJS).
* **script:optimize** Combines and optimizes all RequireJS modules into one file using [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).
* **script:test:report** Uploads the code coverage report to [Coveralls](https://coveralls.io).
* **script:test:unit** Runs the JavaScript unit tests using [Karma](http://karma-runner.github.io) and [Jasmine](http://jasmine.github.io).
* **script:test** Runs all the JavaScript tests.
* **serve** Starts a web server with live-reload support using [BrowserSync](http://www.browsersync.io).
* **source** Copies the source files in the distribution artifact.
* **style:compile** Compiles the Sass files using [Compass](http://compass-style.org).
* **style:lint** Lints the Sass files using [SCSS-Lint](https://github.com/causes/scss-lint).

:tophat: **Tip** It's a good idea to occasionally run:

```
git gc
npm prune && npm install
bower prune && bower install
bundle clean --force && bundle install
```

... to keep your repository lean and mean.

:tophat: **Tip** To skip a build in Travis, just add, `[ci skip]` or `[skip ci]`, somewhere in your commit message. See [Travis docs](http://docs.travis-ci.com/user/customizing-the-build/#Skipping-a-build).

:tophat: **Tip** The environment variable, `<%= _.snakeCase(props.appname).toUpperCase() %>_CI`, must be set in [Travis](http://docs.travis-ci.com/user/environment-variables). It is used to control how Gulp builds the project, for example, sending operating system build notifications.

### :pencil2: Developing

* Use `gulp serve` to fire up a live-reload server and a browser.
* The `serve` task will watch the `src` directory and reload your browser upon detecting changes.

### Installing font icons courtesy Fontello

The icons in this repository use a custom build from [Fontello](http://fontello.com). There is a `.fontellorc` configuration file containing all the icons currently in use.

#### Adding more Fontello icons

To add more icons from Fontello...

* Run `gulp font:config` to open [Fontello](http://fontello.com) in a browser with the current icons pre-selected.
* (Un)Select icons as needed and select the **Download webfont** button.
* You'll now get a `.zip` file containing your new icons and a `config.json` file.
* Disregard everything else and copy the contents of `config.json` to `.fontellorc`.
* Run `gulp font:install` to download and install the newly selected icons.
* The fonts are installed in `lib/font/fontello` and the corresponding CSS in `lib/style/vanilla/vendor/fontello`.
* You can, optionally, add `lib/font/fontello` and `lib/style/vanilla/vendor/fontello` to `.gitignore`.

:warning: Notes:

* This process seems a bit long, but we hope to make it more streamlined and easier in the future. This solution enables you to use various font-icon vendors seamlessly without compromising performance.
* We hope to add a `gulp font:add --icon-name={{icon-name}}` task so the above process is automated.
* We hope you appreciate the need for such a solution.
* `gulp build` will not run the `font:install` task. It must be run separately.


## :rocket: Deploy

This project is continuously deployed to [Heroku](http://www.heroku.com) at [<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/dist](http://<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/dist) using a [NodeJS](https://github.com/heroku/heroku-buildpack-nodejs) [buildpack](https://devcenter.heroku.com/articles/buildpacks) by [Travis](https://travis-ci.org), whenever a new tag is pushed. This should be configured **only once** using the [Heroku toolbelt](https://toolbelt.heroku.com):

```
heroku create <%= _.kebabCase(props.herokuAppname) %>
heroku ps:scale web=1 --app <%= _.kebabCase(props.herokuAppname) %>
heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs#v75 --app <%= _.kebabCase(props.herokuAppname) %>
```

You will need to authenticate Travis with Heroku by adding an API key using:

```
bundle exec travis encrypt $(heroku auth:token) --add deploy.api_key
```

... which will update `.travis.yml` with an encrypted Heroku API key.

:tophat: **Tip** The `heroku ps:scale web=1` will spin up a [dyno](https://devcenter.heroku.com/articles/dynos) under the [free](https://blog.heroku.com/archives/2015/5/7/heroku-free-dynos) plan.

:tophat: **Tip** Use `heroku logs --app <%= _.kebabCase(props.herokuAppname) %>` to view your web server logs.

:tophat: **Tip** The `#75` above is the [release tag](https://github.com/heroku/heroku-buildpack-nodejs/releases) for the project. Use the latest tag for best results.

Next, you need to push a tagged release for the first time so that Travis can deploy once. Bump the `version` property in [`bower.json`](bower.json) and [`package.json`](package.json) and create a tag and push it using:

```
git tag -a v0.0.1 -m "Release v0.0.1"
git push origin master --tags
```

This will make Travis deploy your tagged release to Heroku.

:tophat: **Tip** The non-minified version of this project is also deployed to Heroku at [<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/app](http://<%= _.kebabCase(props.herokuAppname) %>.herokuapp.com/app).


## :scroll: License

See [license.md](license.md).
