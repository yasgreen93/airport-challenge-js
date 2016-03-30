describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should initialize as not flying", function() {
    expect(plane.isFlying).toEqual(false);
  });
});
