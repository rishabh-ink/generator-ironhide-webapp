require.config({
  paths: {
    // Libraries
    "jquery": "../../bower_components/jquery/jquery",
    "voxel": "../../bower_components/voxel/dist/scripts/voxel",
    "voxel-hologram": "../../bower_components/voxel-hologram/dist/scripts/voxel-hologram",
    // /Libraries

    // Application
    "<%= _.kebabCase(props.appname) %>": "<%= _.kebabCase(props.appname) %>",
    "elements.atoms.example": "elements/atoms/example/example",
    // /Application
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
