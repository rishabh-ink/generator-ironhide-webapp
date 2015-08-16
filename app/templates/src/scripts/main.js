require.config({
  paths: {
    // Libraries
    "jquery": "../../bower_components/jquery/jquery",
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "<%= _.kebabCase(props.appname) %>"],
function( $,        <%= _.capitalize(_.camelCase(props.appname)) %>) {
  "use strict";

  var <%= _.camelCase(props.appname) %> = <%= _.capitalize(_.camelCase(props.appname)) %>.create();

  console.log("App with jQuery v%s says, '%s'", $.fn.jquery, <%= _.camelCase(props.appname) %>.greet());
});
