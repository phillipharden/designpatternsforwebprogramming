// Abstract/ Parent class
class Eqipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Child Classes
class Treadmill extends Eqipment {
    constructor(name, price) {
        console.log("Treadmill created")
        super(name, price)
        this.image = "../images/treadmill.png";
    }
}

class Elliptical extends Eqipment {
    constructor(name, price) {
        console.log("Elliptical created");
        super(name, price)
        this.image = "../images/elliptical.png";
    }
}

class Bike extends Eqipment {
    constructor(name, price) {
        console.log("Stationary Bike created");
        super(name, price)
        this.image = "../images/bike.png";
    }
}