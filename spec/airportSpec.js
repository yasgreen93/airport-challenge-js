describe("Airport", function() {

  var plane, airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("When weather is not stormy", function() {
    beforeEach(function() {
      airport = {
        isStormy: false
      };
      plane = {
        land: 'this does not matter'
      };
      landSpy = spyOn(plane, "land");
      // var weather = jasmine.createSpyObj("weather", ["isStormy"]);
      // weather.andCallFake(function() {return false;})
      // var weather = jasmine.createSpy("weather");
      // weather.isStormy.andReturn(false);
      // spyOn(weather, "isStormy").and.callFake(function() { return false; })
    });

    describe("Landing planes", function() {
      it("should add planes after landing", function() {
        plane = {
          isLanded: false,
        };
        expect(landSpy).toHaveBeenCalled();
        // plane.isLanded.andReturn(false);
        airport.accept(plane);
        expect(airport.planes).toContain(plane);
      });
    });

  });
})
