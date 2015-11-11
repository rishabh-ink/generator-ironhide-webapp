var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var argv = require("yargs").argv;
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:lint
 * @see www.npmjs.org/package/gulp-eslint
 */
gulp.task("script:lint", function() {
  return gulp.src([
      path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.script.jsx),
      path.join(CFG.DIR.src, "/**/*." + CFG.FILE.extension.script.js),
      path.join(CFG.DIR.test, "/**/*." + CFG.FILE.extension.script.js)
    ])
    .pipe($.eslint({
      config: CFG.FILE.config.scriptLint
    }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});
