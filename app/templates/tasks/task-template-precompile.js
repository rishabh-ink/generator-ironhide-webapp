var gulp = require("gulp");
var CFG  = require("./utils/config.js");
var $    = require("gulp-load-plugins")();
var path = require("path");
var pkg  = require(path.join("..", CFG.FILE.config.pkg));

/**
 * script:minify:json
 * @see www.npmjs.org/package/gulp-jsonminify
 */
gulp.task("template:precompile", [], function () {
  return gulp.src([
      path.join(CFG.DIR.src, "**/*." + CFG.FILE.extension.markup.template)
    ])
    .pipe($.handlebars())
    .pipe($.defineModule("amd"))
    .pipe(gulp.dest(path.join(CFG.DIR.dist)));
});
