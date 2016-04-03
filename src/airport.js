var DEFAULT_CAPACITY = 10;

function Airport() {
  this.hangar = [];
  this.capacity = DEFAULT_CAPACITY;
}

Airport.prototype.acceptPlane = function(plane) {
  if(this.hangar.length === DEFAULT_CAPACITY) {
    throw("Airport at full capacity");
  } else {
    plane.land();
    this.hangar.push(plane);
  }
};

Airport.prototype.releasePlane = function(plane) {
  plane.takeOff();
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};
