describe("Airport", function() {
  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
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

  describe("#acceptPlane", function() {
    it("should call plane land function", function() {
      airport.acceptPlane(plane);
      expect(plane.land.calls.any()).toEqual(true);
    });

    it("should push that plane into the hangar array", function() {
      airport.acceptPlane(plane);
      expect(airport.hangar).toContain(plane);
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
