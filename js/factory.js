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
/*
IMAGE RESOURCES 

Placeholder Image : "Woman With White Sunvisor Running" Photo by Pixabay from Pexels - https://www.pexels.com/photo/woman-with-white-sunvisor-running-40751/

Treadmill : "Fit focused man running on treadmill in sport club" Photo by Julia Larson from Pexels

Eliptical : "Muscular sportsman exercising in gym" Photo by Eman Genatilan from Pexels

Stationary Bike : "Tired woman with hands down resting on cycling machine" Photo by Andres Ayrton from Pexels

Background Image : Photo by gina lin on Unsplash https://unsplash.com/photos/m27OTMegUyA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
*/

