var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));
var fontello = require("fontello-cli");

/**
 * font:config
 * Opens Fontello.com with the current configuration.
 * @see www.npmjs.org/package/fontello-cli
 */
gulp.task("font:config", [], function(callback) {
  $.util.log("[font:config] Opening Fontello.com with config file", CFG.FILE.config.fontello);

  try {
    fontello.open({
      config: CFG.FILE.config.fontello
    });
  } catch(e) {
    $.util.log("[font:config]", e);
  }

  callback();
});
