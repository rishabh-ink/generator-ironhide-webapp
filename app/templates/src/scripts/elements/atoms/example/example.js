define(["jquery"],
function($) {
  "use strict";

  var Example = {
    defaults: {
      name: "example",

      elements: {
        example: "[data-js~='exampleElement']"
      },

      classnames: {
        exampleActive: "example--active"
      },

      // Add more options as necessary.
    },

    elements: {},

    /**
     * Nested/child components.
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
      // this.elements.example = $(this.options.elements.example);

      console.log(this.options.name, "fetch()", "Fetched", { elements: this.elements });

      return this;
    },

    attach: function() {
      var events = {};

      // events["click." + this.options.name] = $.proxy(this.onClickExample, this);

      // this.elements.example.on(events);

      console.log(this.options.name, "attach()", "Attached events", { events: events });
      return this;
    },

    setup: function() {
      // this.components.anotherComponent = AnotherComponent.create({ /* ... options ... */ });

      console.log(this.options.name, "setup()", "Set up components", { components: this.components });
      return this;
    },

    destroy: function() {
      // this.elements.example.off("." + this.options.name);

      return this;
    }
  };

  return Example;
});
