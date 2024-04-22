// Define the make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
   let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
   };

   if (tracks !== undefined){
       album.tracks = tracks;
   }

   return album;

}

// Calling three functions and creating 3 variable with different values

let album1 = make_album("Faizan", "Album title 1");

let album2 = make_album("Zohaib", "Album title 2");

// Calling a make_album  with third parameter

let album3 = make_album("Hamza", "Album title 3", 10);

// Printing the variable

console.log(album1);
console.log(album2);
console.log(album3);

