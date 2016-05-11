describe("Airport", function() {
  var aiport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj("plane", ["land", "takeOff"]);
  });

  describe("Weather is clear", function() {
    beforeEach(function() {
      spyOn(Math, "random").and.returnValue(9);
    });

    it("initializes with an empty planes array", function(){
      expect(airport.planes.length).toEqual(0);
    });
    
    it("accepts a plane to land", function() {
      airport.landing(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it("raises an error when the airport is full", function() {
      airport.landing(plane);
      airport.landing(plane);
      expect(function() {airport.landing(plane);
      }).toThrowError("airport at capacity, can't land another plane");
    });

    it("allows a plane to take off", function() {
      airport.landing(plane);
      airport.takeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });

  });

    describe("Weather is stormy", function() {
      beforeEach(function() {
        spyOn(Math, "random").and.returnValue(2);
      });
      it("raises an error when stormy and can't land", function() {
        expect(function() {airport.landing(plane);
        }).toThrowError("can't land when stormy");
    });

  });

});