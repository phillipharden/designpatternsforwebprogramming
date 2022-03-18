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