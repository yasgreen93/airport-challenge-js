function Airport() {
  this.hangar = [];
}

Airport.prototype.acceptPlane = function(plane) {
  plane.land();
  this.hangar.push(plane);
};
