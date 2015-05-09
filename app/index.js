'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the ' + chalk.red('ironhide-webapp') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appname',
      message: 'App name',
      default: path.basename(process.cwd())
    }, {
      type: 'input',
      name: 'description',
      message: 'App description',
      default: ''
    }, {
      type: 'input',
      name: 'githubUsername',
      message: 'Github username',
      default: process.env.USER
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('app/**/*'),
        this.destinationPath('app'),
        { props: this.props }
      );
    },

    taskRunner: function () {
      this.fs.copyTpl(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        { props: this.props }
      );

      this.fs.copy(
        this.templatePath('tasks/**/*'),
        this.destinationPath('tasks')
      );
    },

    testRunner: function () {
      this.fs.copyTpl(
        this.templatePath('karmarc'),
        this.destinationPath('.karmarc'),
        { props: this.props }
      );

      this.fs.copy(
        this.templatePath('tests/**/*'),
        this.destinationPath('tests')
      );
    },

    cssPreprocessor: function () {
      this.fs.copyTpl(
        this.templatePath('_Gemfile'),
        this.destinationPath('Gemfile'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('_Gemfile.lock'),
        this.destinationPath('Gemfile.lock'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('compassrc'),
        this.destinationPath('.compassrc'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('ruby-gemset'),
        this.destinationPath('.ruby-gemset'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('ruby-version'),
        this.destinationPath('.ruby-version'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('scsslintrc'),
        this.destinationPath('.scsslintrc'),
        { props: this.props }
      );
    },

    others: function () {
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('_license.md'),
        this.destinationPath('license.md'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('_travis.yml'),
        this.destinationPath('travis.yml'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('jshintignore'),
        this.destinationPath('.jshintignore'),
        { props: this.props }
      );

      this.fs.copyTpl(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc'),
        { props: this.props }
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
