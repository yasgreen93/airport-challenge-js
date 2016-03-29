function Airport(capacity = 20) {
  this.planes = [];
  this.capacity = capacity;
};

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity;
};

Airport.prototype.acceptPlane = function(plane) {
  var plane = plane;
  if (this.planes.length === this.capacity) {
    throw "The airport is currently at full capacity";
  } else {
    plane.land;
    this.planes.push(plane);
  }
};
