// Simple factory
class AircraftFactory {
    constructor() {
        // will not be instantiated, no need for properties or anything else
    }
    static creatAircraft(type) {
        if (type == "jet"){
            return new Jet()
        }
        else if (type == "helicopter"){
            return new Helicopter()
        }
        else if (type == "spaceship"){
            return new SpaceShip()
        }
        else {
            throw "I don't know how to create a " + type + "!!";
        }

    }
}