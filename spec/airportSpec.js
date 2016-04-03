describe("Airport", function() {
  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    // spyAirport = new Airport();
    // var message = "Airport at full capacity";
    // spyOn(spyAirport, "acceptPlane").and.throwError(message);
    plane = {
      land: function() {},
      takeOff: function() {}
    };
    spyOn(plane, "land");
    spyOn(plane, "takeOff");
  });

  it("should have an empty hangar array", function() {
    expect(airport.hangar).toEqual([]);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(10);
  });

  describe("#acceptPlane", function() {
    it("should call plane land function", function() {
      airport.acceptPlane(plane);
      expect(plane.land.calls.any()).toEqual(true);
    });

    it("should push that plane into the hangar array", function() {
      airport.acceptPlane(plane);
      expect(airport.hangar).toContain(plane);
    });

    it("should throw an error if at full capacity", function() {
      for (i = 0; i < 10 ; i++) {
        airport.acceptPlane(plane);
      }
      var acceptPlane = function() {
        airport.acceptPlane(plane);
      };
      expect(acceptPlane).toThrow("Airport at full capacity");
    });
  });

  describe("#releasePlane", function() {
    it("should call takeOff function on plane", function() {
      airport.releasePlane(plane);
      expect(plane.takeOff.calls.any()).toEqual(true);
    });

    it("should delete that plane from the hangar array", function() {
      airport.acceptPlane(plane);
      airport.releasePlane(plane);
      expect(airport.hangar).toEqual([]);
    });
  });
});
