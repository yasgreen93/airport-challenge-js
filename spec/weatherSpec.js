describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should return stormy sometimes", function() {
    spyOn(Math, "random").and.returnValue(1);
    expect(weather.isStormy()).toEqual(true);
  });

  it("should return sunny sometimes", function() {
    spyOn(Math, "random").and.returnValue(0);
    expect(weather.isStormy()).toEqual(false);
  });
});
