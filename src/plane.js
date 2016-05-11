function Plane() {
  this.flying = true;

  this.land = function() {
    this.flying = false;
  };

  this.takeOff = function() {
    this.flying = true;
  };
}
