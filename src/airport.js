function Airport() {
  this.planes = [];

  this.landing = function(plane) {
    if(this.isStormy() === true) {
      throw new Error("can't land when stormy");
    }
    if(this.planes.length >= 2) {
      throw new Error("airport at capacity, can't land another plane");
    }
    plane.land();
    this.planes.push(plane);
  };

  this.isStormy = function() {
    return Math.random(10) === 2;
  };

  this.takeOff = function(plane) {
    plane.takeOff();
    var index = this.planes.indexOf(plane);
    this.planes.splice(index, 1);
  };
}