// Abstract/ Parent class
class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Child Classes
class Treadmill extends Equipment {
    constructor(name, price) {
        console.log("Treadmill created")
        super(name, price)
        this.image = "../images/treadmill.png";
    }
}

class Elliptical extends Equipment {
    constructor(name, price) {
        console.log("Elliptical created");
        super(name, price)
        this.image = "../images/elliptical.png";
    }
}

class Bike extends Equipment {
    constructor(name, price) {
        console.log("Bike created");
        super(name, price)
        this.image = "../images/bike.png";
    }
}

/*
IMAGE RESOURCES 

Welcome Image : "Woman With White Sunvisor Running" Photo by Pixabay from Pexels - https://www.pexels.com/photo/woman-with-white-sunvisor-running-40751/

Treadmill : "Fit focused man running on treadmill in sport club" Photo by Julia Larson from Pexels - https://www.pexels.com/photo/fit-focused-man-running-on-treadmill-in-sport-club-6455851/

Eliptical : "Muscular sportsman exercising in gym" Photo by Eman Genatilan from Pexels - https://www.pexels.com/photo/muscular-sportsman-exercising-in-gym-5253842/

Bike : "Tired woman with hands down resting on cycling machine" Photo by Andres Ayrton from Pexels - https://www.pexels.com/photo/tired-woman-with-hands-down-resting-on-cycling-machine-6551418/

Background Image : Photo by gina lin on Unsplash https://unsplash.com/photos/m27OTMegUyA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
*/