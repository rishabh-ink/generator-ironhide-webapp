var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));
var notify = require("./utils/notify-script-test-unit");

/**
 * script:transpile
 * @see www.npmjs.com/package/gulp-babel
 */
gulp.task("script:transpile", function(callback) {
  return gulp.src([
      path.join(CFG.DIR.src, CFG.DIR.script, "/**/*." + CFG.FILE.extension.script.js)
    ])
    .pipe($.babel({
      babelrc: CFG.FILE.config.babel
    }))
    .pipe(gulp.dest(
      path.join(CFG.DIR.dist, CFG.DIR.script) // FIXME Removing `, CFG.DIR.script` is causing the destination to be `dist/components` instead of the expected, `dist/scripts/components`.
    ));
});
