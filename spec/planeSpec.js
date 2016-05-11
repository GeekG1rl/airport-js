describe("Plane", function() {
  
  var plane;
  beforeEach(function() {
    plane = new Plane();
  });

  it("checks that the plane is flying", function() {
    expect(plane.flying).toBeTruthy();
  });

  it("lands the plane", function() {
    plane.land();
    expect(plane.flying).toBeFalsy();
  });

  it("takes off", function() {
    plane.land();
    plane.takeOff();
    expect(plane.flying).toBeTruthy();

  });

});