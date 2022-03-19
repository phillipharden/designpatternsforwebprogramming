// Factory Pattern is a creational design pattern that allows for the encapsulation of your object 
class EquipmentFactory {
    constructor() {
        // will not be instantiated, no need for properties or anything else
    }
    // this is the only place that an object is instantiated
    static creatEquipment(type) {
        switch (type) {
            case "Treadmill":
                return new Treadmill();
                break;
            case "Elliptical":
                return new Elliptical()
                break;

            case "Bike":
                return new Bike()
                break;
            default:
                // The error message is shown in either an alert box or the HTML (preferred)
                alert("I don't know how to create an " + type + "!!");
                throw "I don't know how to create an " + type + "!!";
                break;
        }
    }
}