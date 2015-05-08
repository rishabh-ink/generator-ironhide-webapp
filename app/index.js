'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the great ' + chalk.red('IronhideWebapp') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('_Gemfile'),
        this.destinationPath('Gemfile')
      );
      this.fs.copy(
        this.templatePath('_Gemfile.lock'),
        this.destinationPath('Gemfile.lock')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_license.md'),
        this.destinationPath('license.md')
      );
      this.fs.copy(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md')
      );
      this.fs.copy(
        this.templatePath('_travis.yml'),
        this.destinationPath('travis.yml')
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
      this.fs.copy(
        this.templatePath('compassrc'),
        this.destinationPath('.compassrc')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes')
      );
      this.fs.copy(
        this.templatePath('jshintignore'),
        this.destinationPath('.jshintignore')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('karmarc'),
        this.destinationPath('.karmarc')
      );
      this.fs.copy(
        this.templatePath('ruby-gemset'),
        this.destinationPath('.ruby-gemset')
      );
      this.fs.copy(
        this.templatePath('ruby-version'),
        this.destinationPath('.ruby-version')
      );
      this.fs.copy(
        this.templatePath('scsslintrc'),
        this.destinationPath('.scsslintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
