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
    "jquery": "bower_components/jquery/jquery",
    "jasmine-jquery": "bower_components/jasmine-jquery/lib/jasmine-jquery",
    "voxel": "bower_components/voxel/dist/scripts/voxel",
    "voxel-hologram": "bower_components/voxel-hologram/dist/scripts/voxel-hologram",
    // /Libraries

    // Application
    "<%= _.kebabCase(props.appname) %>": "src/scripts/<%= _.kebabCase(props.appname) %>",
    "elements.atoms.example": "src/scripts/elements/atoms/example/example",
    // /Application

    // Fixtures
    "<%= _.kebabCase(props.appname) %>-fixture": "tests/<%= _.kebabCase(props.appname) %>-fixture"
    // /Fixtures
  },

  shim: {
    // Test libraries
    "jasmine-jquery": {
      deps: [
        "jquery"
      ]
    }
    // /Test libraries
  },

  deps: allTestFiles,

  callback: window.__karma__.start
});
