'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('ironhide-webapp:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ appname: 'ironhide-webapp-test-app' })
      .on('end', done);
  });

  it('Should create files', function () {
    assert.file([
      'app',
      'tasks',
      'tests',
      'bower.json',
      'Gemfile',
      'gulpfile.js',
      'license.md',
      'package.json',
      'package.json',
      'readme.md',
      '.bowerrc',
      '.compassrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.hologramrc',
      '.jshintignore',
      '.jshintrc',
      '.karmarc',
      '.ruby-gemset',
      '.ruby-version',
      '.scsslintrc',
      '.travis.yml'
    ]);
  });
});
