module.exports = {
  DIR: {
    src: "src",
    dist: "dist",
    bower: "bower_components",
    npm: "node_modules",
    script: "scripts",
    style: "styles",
    image: "images",
    font: "fonts",
    fontello: "fontello",
    test: "tests",
    template: "templates",
    fixture: "fixtures",
    data: "data",
    unit: "unit",
    vendor: "libraries",
    gulp: "tasks",
    asset: "assets",
    util: "utils",
    git: ".git",

    report: "reports",
    coverage: "coverage",

    exclude: {
      markup: "!src/*.html",
      test: "!/**/test{,/**}" // Exclude test files; @see https://github.com/gulpjs/gulp/issues/165#issuecomment-32613179
    }
  }, // /DIR

  FILE: {
    config: {
      pkg: "package.json",
      styleLint: ".scsslintrc",
      scriptLint: ".jshintrc",
      compass: ".compassrc",
      bower: "bower.json",
      testMain: "index.js",
      scriptMain: "index.js",
      appMain: "<%= _.kebabCase(props.appname) %>.js",
      appModule: "<%= _.kebabCase(props.appname) %>",
      karma: ".karmarc",
      hologram: ".hologramrc",
      babel: ".babelrc",
      fontello: ".fontellorc"
    },
    coverageReporter: {
      lcov: "lcov.info",
      junit: "junit.xml"
    },
    extension: {
      style: {
        scss: "scss",
        css: "css"
      },
      script: {
        js: "js",
        json: "json",
        jsx: "jsx"
      },
      markup: {
        html: "html",
        template: "hbs"
      },
      image: {
        jpg: "jpg",
        png: "png"
      }
    }
  } // /FILE
};
