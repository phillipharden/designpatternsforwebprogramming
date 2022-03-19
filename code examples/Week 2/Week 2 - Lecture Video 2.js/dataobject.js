// DataObjects
// used to facilitate the transporting of data

//instead of using an array you can use a data object
class FoodDO{
    constructor(){
        console.log("Data Object created!");
        this.pizza = "cheese";
        this.drinks =["soda", "water"];
        this.cost = 100;
        this.meat = "steak";
    }

}

// instantiate a new Data Object
var foodDataObject = new FoodDO();

console.log(foodDataObject.cost);

// property names
for (var p in foodDataObject){
    console.log(p);
}

// property values
for (var p in foodDataObject){
    console.log(foodDataObject[p]);
}

// both property names & values
for (var p in foodDataObject){
    console.log(p + " : " + foodDataObject[p]);
}