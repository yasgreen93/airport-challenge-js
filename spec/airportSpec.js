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
    });

    describe("Landing planes", function() {
      it("should add planes after landing", function() {
        airport = new Airport();
        console.log(airport);
        plane = {
          isLanded: false,
          land: "Landing..."
        };
        airport.acceptPlane(plane);
        expect(airport.planes).toContain(plane);
      });
    });

  });
})
