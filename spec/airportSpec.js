describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should have an empty hangar array", function() {
    expect(airport.hangar).toEqual([]);
  });
});
