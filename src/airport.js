function Airport() {
  this.hangar = [];
}

Airport.prototype.acceptPlane = function(plane) {
  plane.land();
  this.hangar.push(plane);
};

Airport.prototype.releasePlane = function(plane) {
  plane.takeOff();
  var index = this.hangar.indexOf(plane);
  this.hangar.splice(index, 1);
};
