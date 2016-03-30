describe("Airport", function() {
  var airport, plane;

  beforeEach(function() {
    airport = new Airport();
    plane = {
      takeOff: function() {}
    };
    spyOn(plane, "takeOff");
  });

  it("should have a planes array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
  });

  it("can be initialized with any capacity", function () {
    airport = new Airport(10);
    expect(airport.capacity).toEqual(10);
  });

  describe("#requestTakeoff", function() {
    it("should add the plane to the array", function() {
      airport.requestTakeoff(plane);
      expect(airport.planes).toContain(plane);
    });

    it("should call takeOff method on plane", function() {
      expect(plane.takeOff.calls.any()).toEqual(false);
      airport.requestTakeoff(plane);
      expect(plane.takeOff.calls.any()).toEqual(true);
    });
  });
});
