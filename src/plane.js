function Plane() {
  this.flying = false;
}

Plane.prototype.land = function() {
  this._changeFlyingStatus();
};

Plane.prototype.takeOff = function() {
  this._changeFlyingStatus();
};

Plane.prototype._changeFlyingStatus = function() {
  this.flying = !this.flying;
};
