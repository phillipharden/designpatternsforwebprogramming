
(() => {
    // Syntax
    // var htmlImageElement = new Image(width, height);
    const image = new Image(500, 500);
    image.src = "../images/deadlift.jpg";
    console.log("image info", image.height, image.width);

    image.addEventListener('load', e => {
        console.log("image loaded");
        image.height = 100;
        image.width = 100;
        document.body.appendChild(image);
    })

})();




//###########################################################################################################################################################################