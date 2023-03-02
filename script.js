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
/*
let songCovers = [
"https://imgur.com/Hn8GgzJ.jpg" , 
"https://imgur.com/9jeK0sg.jpg" , "https://imgur.com/d1MycQ6.jpg", 
"https://imgur.com/iO5XbJS.jpg" , 
"https://imgur.com/2DjUTOO.jpg"
];
let songNames = [
"Snot" , 
"Death Blooms" , 
"(sic)" ,
"Good God" , 
"Now I Lay Thee Down"
];
let songArtists = [
"Snot" , 
"Mudvayne" , 
"Slipknot" , 
"KoRn" , 
"Machine Head"
];
let songLinks = [
"https://www.youtube.com/embed/LNCkKgJ7Aws" , 
"https://www.youtube.com/embed/9nVvojfQVBY", 
"https://www.youtube.com/embed/m3I3-KTJbtY" ,
"https://www.youtube.com/embed/GHkUCSeTi2I" , 
"https://www.youtube.com/embed/1xpiEBde9fo"
];
*/

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.

// task 12: create an object for each of your songs.
let song1 = {
  name: "Snot" ,
  artist: "Snot" ,
  link: "https://www.youtube.com/embed/LNCkKgJ7Aws" , 
  image: "https://imgur.com/Hn8GgzJ.jpg" 
};
let song2 = {
  name: "Death Blooms" ,
  artist: "Mudvayne" ,
  link: "https://www.youtube.com/embed/9nVvojfQVBY",
  image: "https://imgur.com/9jeK0sg.jpg"
};
let song3 = {
  name: "(sic)" ,
  artist: "Slipknot" ,
  link: "https://www.youtube.com/embed/m3I3-KTJbtY" , 
  image: "https://imgur.com/d1MycQ6.jpg" ,
};
let song4 = {
  name: "Good God" ,
  artist: "KoRn" ,
  link: "https://www.youtube.com/embed/GHkUCSeTi2I" ,
  image: "https://imgur.com/iO5XbJS.jpg"
};

let song5 = {
  name: "Aesthetics of Hate" ,
  artist: "Machine Head" ,
  link: "https://www.youtube.com/embed/NWks-8C9RMs" ,
  image: "https://imgur.com/2DjUTOO.jpg"
};
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

let playlist = [song1 , song2 , song3 , song4 , song5];

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let newSong = {};
newSong.image = (image).value;
newSong.name = (songName).value;
newSong.arist = (artist).value;
newSong.link = (songLink).value;

// task 10: use `.push()` to add each input value to the correct array.
  
playlist.push(newSong)

emptyDisplay()
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

  playlist.forEach(function(song) {
  let image = document.createElement("img");
  image.src= song.image
  displayImage.appendChild(image);
});

playlist.forEach(function(song) {
  let name = document.createElement("p");
  name.innerHTML = song.name;
  displaySong.appendChild(name);
});

playlist.forEach(function(song) {
  let artist = document.createElement("p");
  artist.innerHTML = song.artist;
  displayArtist.appendChild(artist);
});

playlist.forEach(function(song) {
  let link = document.createElement("iframe");
  link.src = song.link;
  link.style.width = "150px";
  link.style.height = "150px";
  link.style.display = "block";
  displayLink.appendChild(link);
});



}

// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
