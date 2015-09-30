define(["jquery", "jasmine-jquery", "elements.atoms.example"],
function(jQ,       JasminejQuery,    Example) {
  describe("Example", function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = "/base/tests";
      loadFixtures("elements/atoms/example/example-fixture.html");

      var example = Example.create({ /* ... options ... */ });
    });

    it("loadFixtures() Should load fixtures", function() {
      expect(jQ("[data-js~='example']")).toBeInDOM();
    });

    // Add more tests accordingly...
  });
});
