const DEFAULT_CAPACITY = 20;

function Airport(capacity=DEFAULT_CAPACITY) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.requestTakeoff = function (plane) {
  this.planes.push(plane);
  plane.takeOff();
};
