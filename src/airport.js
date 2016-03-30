const DEFAULT_CAPACITY = 20;

function Airport(capacity=DEFAULT_CAPACITY) {
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.requestLanding = function (plane) {
  this.planes.push(plane);
  plane.landing();
};

Airport.prototype.requestTakeoff = function (plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index,1);
  plane.takeOff();
};
