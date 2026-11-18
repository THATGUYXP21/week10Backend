import express from "express";

const app = express()
const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello from my first server.")
// })

// // app.get("/favorite-food", (req, res) => {
// //     res.send("My favorite food is pizza!")
// // })

// app.get("/about-me", (req, res) => {
//     res.send("My name is Xavier and I am a student at CCL.")
// })

// app.get("/api", (req, res) => {
//     res.json({message: "Hello from the API!", version: 1})
// })



// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// })


// // Route 1: GET /hello
// app.get("/hello", (req, res) => {
//     res.send("Hello, Cameron!");
// });

// // Route 2: GET /api/me
// app.get("/api/me", (req, res) => {
//     res.json({
//         name: "Cameron",
//         city: "Columbus",
//         favoriteFood: "Pizza"
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server is running at http://localhost:3000");
// });

// const pets = [
//     { name: "Buddy", type: "Dog", age: 3 },
//     { name: "Mittens", type: "Cat", age: 9 },
//     { name: "Charlie", type: "Dog", age: 7 },
//     { name: "Whiskers", type: "Cat", age: 8 }
// ];

// const games = [
//   {
//     id: 1,
//     title: "Spider-Man 2",
//     genre: "Action",
//     platform: "PS5"
//   },
//   {
//     id: 2,
//     title: "Resident Evil 4",
//     genre: "Horror",
//     platform: "PC"
//   },
//   {
//     id: 3,
//     title: "Minecraft",
//     genre: "Sandbox",
//     platform: "PC"
//   },
//   {
//     id: 4,
//     title: "Call of Duty",
//     genre: "Shooter",
//     platform: "Xbox"
//   }
// ];

// app.get("/games", (req, res) => {
//   res.json(games);
// });

// app.get("/games/count", (req, res) => {
//   res.json({
//     count: games.length
//   });
// });

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// const songs = [
//   {
//     id: 1,
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     year: 2019
//   },
//   {
//     id: 2,
//     title: "God's Plan",
//     artist: "Drake",
//     year: 2018
//   },
//   {
//     id: 3,
//     title: "As It Was",
//     artist: "Harry Styles",
//     year: 2022
//   },
//   {
//     id: 4,
//     title: "HUMBLE.",
//     artist: "Kendrick Lamar",
//     year: 2017
//   }
// ];

// app.get("/songs/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const song = songs.find((song) => song.id === id);

//   if (!song) {
//     return res.status(404).json({
//       error: "Song not found"
//     });
//   }

//   res.json(song);
// });


app.get("/songs", (req, res) => {
  const genre = req.query.genre;
  const artist = req.query.artist;

  let filteredSongs = songs;

  if (genre) {
    filteredSongs = filteredSongs.filter(song =>
      song.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (artist) {
    filteredSongs = filteredSongs.filter(song =>
      song.artist.toLowerCase() === artist.toLowerCase()
    );
  }

  res.json(filteredSongs);
});