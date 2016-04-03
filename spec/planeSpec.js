describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
    spyPlane = new Plane();
    spyOn(spyPlane, "_changeFlyingStatus");
  });

  it("should start with flying variable set to false", function() {
    expect(plane.flying).toEqual(false);
  });

  describe("#land", function() {
    it("should call _changeFlyingStatus function", function() {
      spyPlane.land();
      expect(spyPlane._changeFlyingStatus.calls.any()).toEqual(true);
    });
  });

  describe("#_changeFlyingStatus", function() {
    it("should change flying variable to true", function() {
      plane._changeFlyingStatus();
      expect(plane.flying).toEqual(true);
    });
    it("should change flying variable to false", function() {
      plane._changeFlyingStatus();
      plane._changeFlyingStatus();
      expect(plane.flying).toEqual(false);
    });
  });
});
