function getArea(length, width){
    return length * width;
}

// the arrow => replaces the word function

// const getArea2 = (length, width)=>{
//     return length * width;
// }
// Shorthand Arrow Function - Implicit Return
// 2 or more argumenrs you need the parenthesis 
const getArea2 = (length, width)=> length * width;

// if you only have 1 argument then omit the parenthesis
const dogYears = (years)=> years * 7;

// () or _
const hello = _=>{
    console.log("Hello");
}

hello();

let area = getArea(10,5);
let area2 = getArea2(5,5);
console.log(area);
console.log(area2);

console.log(dogYears(5));

// https://www.youtube.com/watch?v=avuoiA9kGMA