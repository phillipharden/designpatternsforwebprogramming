// Phillip Harden | Data Visualization
// Controller - Links the user and the system ################################################################################################
class Controller {
    constructor() {
        console.log("SINGLETON:CONTROLLER created");
        this.model = new Model();
        this.view = new View();

        // Created an index variable to use for the data.movies index number
        this.index = 0;

        // event for when the page is loaded
        let evt = new Event("page_loaded");
        // Dispatch the event
        document.dispatchEvent(evt);

        // event listener for for the Submit Button is clicked
        document.querySelector("#next").addEventListener("click", e => this.onClick(e));
    }
    static getInstance() {
        if (!Controller._instance) {
            Controller._instance = new Controller();
            return Controller._instance;
        } else {
            throw "Singleton has already been created!";
        }
    }

    onClick(e) {
        ++this.index
        // Confirmation of Submit being clicked
        console.log("onClick");

        /* To keep the movies looping by starting over once the end is reached; I used an if statement to determine 
        whether or not the index was higher than the total number of items in the movies array and if it is higher
        then I want to rest it to 0 */
        if (this.index > data.movies.length - 1) {
            this.index = 0;
        }

        // event for when the page is loaded
        let evt = new Event("next_clicked");

        // Attach an index to the event that is equal to my Controller's index variable to keep track of each movie in the array
        evt.index = this.index;

        // Dispatch the event
        document.dispatchEvent(evt);
    }
}
// Model - Manages the data of an application ################################################################################################
class Model {
    constructor() {
        console.log("MODEL created");
        let movie = new MovieDO();
        document.addEventListener("page_loaded", e => this.onLoaded(e, movie));
        document.addEventListener("next_clicked", e => this.getNext(e, movie));
    }
    // The Model class uses at least one static method from your custom Utility class
    process(e) {
        console.log("I hear you Controller check", e);
        this.onLoaded(e);
    }
    onLoaded(e, movie) {
        console.log("onLoaded");
        movie.title = data.movies[0].title;
        movie.duration = Utility.getTime(data.movies[0].duration);
        movie.rating = data.movies[0].rating;
        movie.image = data.movies[0].image;

        let evt = new Event("movie_loaded");
        evt.movie = movie;
        // Dispatch the event
        document.dispatchEvent(evt);
    }
    getNext(e, movie) {
        console.log("getNext");
        // Get the info from the next movie in the array
        movie.title = data.movies[e.index].title;
        movie.duration = Utility.getTime(data.movies[e.index].duration);
        movie.rating = data.movies[e.index].rating;
        movie.image = data.movies[e.index].image;

        // Event to let the View know that the next movie has been loaded into the data object
        let evt = new Event("next_loaded");
        // Attach the movie (data object) to the event
        evt.movie = movie;
        // Dispatch the event
        document.dispatchEvent(evt);
    }
}
// View - A visual representation of the model (HTML) ################################################################################################
class View {
    constructor() {
        console.log("VIEW created");
        // Listening for both "movie_loaded" & "next_loaded: events
        document.addEventListener("movie_loaded", e => this.displayMovie(e));
        document.addEventListener("next_loaded", e => this.displayMovie(e));
    }
    // The data sent to the view is in the form of a Data Object containing data for only 1 movie.
    displayMovie(e) {
        e.preventDefault();
        console.log("displayMovie");

        //clear the fields if they already exist
        document.getElementById('display-area').innerHTML = '';

        // accessing the table by the ID
        let displayArea = document.getElementById("display-area");

        // Add Movie image   
        let img = new Image();
        img.src = e.movie.image;
        img.alt = e.movie.title;
        img.id = "movie-img";
        document.getElementById("display-area").appendChild(img);

        // Add Movie title
        let title = document.createElement("h3");
        title.id = "movie-title";
        let titleText = document.createTextNode(e.movie.title);
        title.appendChild(titleText);
        displayArea.appendChild(title);

        // Add Movie rating
        let rating = document.createElement("p");
        rating.id = "movie-rating";
        let ratingText = document.createTextNode("Rated " + e.movie.rating);
        rating.appendChild(ratingText);
        displayArea.appendChild(rating);

        // Add Movie duration
        let duration = document.createElement("p");
        duration.id = "movie-duration";
        let durationText = document.createTextNode("Duration " + e.movie.duration);
        duration.appendChild(durationText);
        displayArea.appendChild(duration);
    }
}

//###########################################################################################################################################################################
// IIFE - Immediately Invoked Function Expression (needs to be at the bottom)
(() => {
    // Proper use of a Singleton
    const app = Controller.getInstance();
})();