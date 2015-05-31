define(["<%= _.kebabCase(props.appname) %>-fixture", "<%= _.kebabCase(props.appname) %>"],
function(<%= _.capitalize(_.camelCase(props.appname)) %>Fixture,   <%= _.capitalize(_.camelCase(props.appname)) %>) {
  describe("<%= _.capitalize(_.camelCase(props.appname)) %>", function() {
    it("Should greet", function() {
      var <%= _.camelCase(props.appname) %> = <%= _.capitalize(_.camelCase(props.appname)) %>.create({
        greeting: <%= _.capitalize(_.camelCase(props.appname)) %>Fixture.greeting
      });

      expect(<%= _.capitalize(_.camelCase(props.appname)) %>.greet()).toEqual(<%= _.capitalize(_.camelCase(props.appname)) %>Fixture.greeting);
    });
  });
});
