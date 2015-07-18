var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var exec = require("child_process").exec;
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));

/**
 * style:doc
 * Generates a living styleguide from the `doc` comments from all `lib/style/*.scss`.
 * @see trulia.github.io/hologram
 */
gulp.task("style:doc", ["style:compile"], function(callback) {
  var hologramProcess = exec([
    "bundle",
    "exec",
    "hologram",
    "--config",
    CFG.FILE.config.hologram
  ].join(" "), function(err, stdout, stderr) {
    $.util.log("[style:doc] stdout:", stdout);
    $.util.log("[style:doc] stderr: ", stderr);

    if(null !== err) {
      $.util.log("[style:doc] err: ", err);
    }

    callback();
  });
});
