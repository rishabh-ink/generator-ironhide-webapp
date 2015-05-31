define(["jquery", "components/example"],
function($,        Example) {
  "use strict";

  var <%= _.capitalize(_.camelCase(props.appname)) %> = {
    defaults: {
      name: "<%= _.capitalize(_.camelCase(props.appname)) %>",

      elements: {
      },

      classnames: {
      },

      greeting: "Hello world!"

      // Add more options as necessary.
    },

    elements: {},

    /**
     * Child/nested components.
     */
    components: {},

    constants: {},

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {

      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      // this.elements.exampleSub = $(this.options.elements.exampleSub);

      console.log(this.options.name, "fetch()", "Fetched", { elements: this.elements });

      return this;
    },

    attach: function() {
      var events = {};

      console.log(this.options.name, "attach()", "Attached events", { events: events });
      return this;
    },

    setup: function() {
      this.components.example = Example.create();

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });
      return this;
    },

    destroy: function() {
      return this;
    },

    greet: function() {
      return this.options.greeting;
    }
  };

  return Object.create(<%= _.capitalize(_.camelCase(props.appname)) %>);
});
