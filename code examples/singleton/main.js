// Singleton Creational Design Pattern
window.addEventListener("load", function(){
    console.log("pageloaded");
    //instantiate Singleton
    var myAssignment = Assignment.getInstance();
    var myAssignment1 = Assignment.getInstance();    
});

class Assignment{
    constructor(){
        console.log("Singletone Created!");
        console.log("Start code here!!");
    }
    static getInstance(){
        // Is there an instamce variable attached to the class?
        // Id so, don't create. If not, then it's okay to create!
        if(!Assignment._instance){
            Assignment._instance = new Assignment();
            return Assignment._instance;
        }
        else{
            throw "Sinful! Trying to create a second Singleton!";
        }
    }
}
// https://www.youtube.com/watch?v=7FSFyFTgIvE