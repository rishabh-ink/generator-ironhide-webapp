var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  baseUrl: "/base",

  paths: {
    // Libraries
    "jquery": "libraries/jquery/jquery",
    // /Libraries

    // Application
    "<%= _.kebabCase(props.appname) %>": "app/scripts/<%= _.kebabCase(props.appname) %>",
    "components/example": "app/scripts/components/example",
    // /Application

    // Fixtures
    "<%= _.kebabCase(props.appname) %>-fixture": "tests/fixtures/<%= _.kebabCase(props.appname) %>-fixture"
    // /Fixtures
  },

  shim: {
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
