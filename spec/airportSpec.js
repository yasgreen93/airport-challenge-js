describe("Airport", function() {

  beforeEach(function() {
    var plane = jasmine.createSpyObj("plane", ["land"]);
    var airport = new Airport();
  });

  describe("When weather is not stormy", function() {
    beforeEach(function() {
      // var weather = jasmine.createSpyObj("weather", ["isStormy"]);
      // weather.andCallFake(function() {return false;})
      var weather = jasmine.createSpy("weather");
      // weather.isStormy.andReturn(false);
      spyOn(weather, "isStormy").and.callFake(function() { return false; })
    });

    describe("Landing planes", function() {
      it("should add planes after landing", function() {
        var plane = jasmine.createSpyObj("plane", ["isLanded"]);
        plane.isLanded.andReturn(false);
        airport.accept(plane);
        expect(airport.planes).toContain(plane);
      });
    });

  });
})
