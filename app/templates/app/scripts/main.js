require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery",
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "<%= _.kebabCase(props.appname) %>"],
function( $,        <%= _.capitalize(_.camelCase(props.appname)) %>) {
  "use strict";

  console.log("App with jQuery v%s says, '%s'", $.fn.jquery, <%= _.capitalize(_.camelCase(props.appname)) %>.greet());
});
