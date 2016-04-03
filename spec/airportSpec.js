describe("Airport", function() {
  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      land: function() {}
    };
    spyOn(plane, "land");
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
});
