describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should have a planes array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should have a default capacity", function() {
    expect(airport.capacity).toEqual(DEFAULT_CAPACITY);
  });

  it("can be initialized with any capacity", function (){
    airport = new Airport(10);
    expect(airport.capacity).toEqual(10);
  });
});
