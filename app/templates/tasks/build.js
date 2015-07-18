var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var notify = require("./utils/notify");

/**
 * Build
 * Creates a build artifact, ready for deployment.
 */
gulp.task("build", ["style:doc", "script:minify", "image:minify"], function(callback) {
  notify.showNotification({
    subtitle: "Task build",
    message: "Build complete!"
  });

  callback();
});
