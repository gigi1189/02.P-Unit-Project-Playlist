// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let displayImage = document.querySelector(".display-image")
let displaySong = document.querySelector(".display-song")
let displayArtist = document.querySelector(".display-artist")
let displayLink = document.querySelector(".display-link")


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
// let songCovers = ["i.scdn.co/image/ab67616d0000b273c31acd76454b29586f1121b4" , "i.scdn.co/image/ab67616d0000b27380caf18e0ad32956cd798510" , "images.genius.com/49b96efe6e740e4912120869f9e6c153.999x999x1.png", "https://images.genius.com/acf60de742463718d2d86dc40ef7cabf.640x640x1.png" , "https://images.genius.com/7529650ee543d2c662962aa1613cba77.1000x1000x1.jpg"];
// let songNames = ["Snot" , "Death Blooms" , "(sic)" , "Good God" , "Now I Lay Thee Down"];
// let songArtists = ["Snot" , "Mudvayne" , "Slipknot" , "Korn" , "Machine Head"];
// let songLinks = ["https://www.youtube.com/watch?v=5nFCl-5PqUc" , "https://www.youtube.com/watch?v=9nVvojfQVBY" ,"https://www.youtube.com/watch?v=m3I3-KTJbtY" , "https://www.youtube.com/watch?v=mM3qOxHdcCU" , "https://www.youtube.com/watch?v=wQLQC4ln05o"];

// task 8:

for (let i = 0; i < cars.length; i++) {
  let imgElement = "document.createElement("img")";
}
//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.



}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
