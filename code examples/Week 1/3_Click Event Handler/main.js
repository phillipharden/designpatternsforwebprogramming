class Demo{
    constructor(){
        console.log("Demo started");
        this.food = "pizza";
        this.favNumbers = [3,4,5,6];
        // Arrow Function =>
        document.querySelector("#btn").addEventListener("click", e => this.onClick(e));
        // this.onClick(null);

    }
    onClick(e){
        console.log("clicked");
        console.log(this, e.target);

    }

}

(()=>{
    const demo = new Demo();
})();


// https://www.w3schools.com/js/js_arrow_function.asp