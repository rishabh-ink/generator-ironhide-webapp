var gulp = require("gulp");
var CFG = require("./utils/config.js");
var $ = require("gulp-load-plugins")();
var path = require("path");
var pkg = require(path.join("..", CFG.FILE.config.pkg));
var fontello = require("fontello-cli");

/**
 * font:install
 * Installs the font-icons specified in the Fontello config file to `dist/font`.
 * @see www.npmjs.org/package/fontello-cli
 */
gulp.task("font:install", function(callback) {
  $.util.log("[font:install] Installing fonts using config", CFG.FILE.config.fontello);

  var fontelloPaths = {
    css: path.join(CFG.DIR.src, CFG.DIR.style, CFG.DIR.vendor, CFG.DIR.fontello),
    font: path.join(CFG.DIR.src, CFG.DIR.font, CFG.DIR.fontello)
  };

  try {
    fontello.install({
      config: CFG.FILE.config.fontello,
      css: fontelloPaths.css,
      font: fontelloPaths.font
    });
  } catch(e) {
    $.util.log("[font:install]", e);
  }

  $.util.log("[font:install] CSS installed at", fontelloPaths.css);
  $.util.log("[font:install] Fonts installed at", fontelloPaths.font);

  callback();
});
