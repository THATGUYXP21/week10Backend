import express from "express";
import { readFile, writeFile } from "fs/promises";

const app = express();
const port = 3000;
const DATA_FILE = "./data/pets.json";

app.use(express.json());

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

const pets = [
  { name: "Buddy", type: "Dog", age: 3 },
  { name: "Mittens", type: "Cat", age: 9 },
  { name: "Charlie", type: "Dog", age: 7 },
  { name: "Whiskers", type: "Cat", age: 8 },
];

async function readPets() {
  const text = await readFile(DATA_FILE, "utf-8");
  const pets = JSON.parse(text);
  return pets;
}

async function writePets(pets) {
  const text = JSON.stringify(pets, null, 2);
  await writeFile(DATA_FILE, text, "utf-8");
}

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

// const songs = [
//   {
//     id: 1,
//     title: "God's Plan",
//     artist: "Drake",
//     genre: "rap",
//   },
//   {
//     id: 2,
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     genre: "pop",
//   },
//   {
//     id: 3,
//     title: "As It Was",
//     artist: "Harry Styles",
//     genre: "pop",
//   },
//   {
//     id: 4,
//     title: "HUMBLE.",
//     artist: "Kendrick Lamar",
//     genre: "rap",
//   },
// ];

// app.post("/songs", (req, res) => {
//   const { title, artist, genre } = req.body;
//   const id =
//     songs.length > 0 ? Math.max(...songs.map((song) => song.id)) + 1 : 1;

//   const newSong = { id, title, artist, genre };
//   songs.push(newSong);
//   res.status(201).json(newSong);
// });

// app.get("/songs", (req, res) => {
//   res.json(songs);
// });

// app.post("/movies", (req, res) => {
//   const { title, director, year } = req.body;
//   const id = movies.length > 0 ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1;

//   const newMovie = { id, title, director, year };
//   movies.push(newMovie);
//   res.status(201).json(newMovie);
// });

// const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     director: "Christopher Nolan",
//     year: 2010
//   },
//   {
//     id: 2,
//     title: "Spider-Man 3",
//     director: "Sam Raimi",
//     year: 2007
//   },
//   {
//     id: 3,
//     title: "The Dark Knight",
//     director: "Christopher Nolan",
//     year: 2008
//   },
//   {
//     id: 4,
//     title: "The Matrix Reloaded",
//     director: "The Wachowskis",
//     year: 2003
//   }
// ];

// app.get("/movies", (req, res) => {
//   res.json(movies);
// });

// const movies = [
//   {
//     id: 1,
//     title: "Spider-Man",
//     genre: "Action",
//     year: 2002,
//   },
//   {
//     id: 2,
//     title: "Batman",
//     genre: "Action",
//     year: 2022,
//   },
//   {
//     id: 3,
//     title: "The Lion King",
//     genre: "Animation",
//     year: 1994,
//   },
//   {
//     id: 4,
//     title: "Jurassic Park",
//     genre: "Adventure",
//     year: 1993,
//   },
// ];

// app.get("/movies", (req, res) => {
//   res.json(movies);
// });

// app.put("/movies/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const movie = movies.find((movie) => movie.id === id);

//   if (!movie) {
//     return res.status(404).json({
//       message: "Movie not found",
//     });
//   }

//   const { title, genre, year } = req.body;

//   if (!title || !genre || !year) {
//     return res.status(400).json({
//       message: "Please provide title, genre, and year",
//     });
//   }

//   movie.title = title;
//   movie.genre = genre;
//   movie.year = year;

//   res.json(movie);
// });

// app.delete("/movies/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const movieIndex = movies.findIndex((movie) => movie.id === id);

//   if (movieIndex === -1) {
//     return res.status(404).json({
//       message: "Movie not found",
//     });
//   }

//   const deletedMovie = movies.splice(movieIndex, 1)[0];
//   res.json(deletedMovie);
// });

// app.use(express.json());

// let songs = [
//   {
//     id: 1,
//     title: "Blinding Lights",
//     artist: "The Weeknd",
//     genre: "Pop"
//   },
//   {
//     id: 2,
//     title: "God's Plan",
//     artist: "Drake",
//     genre: "Rap"
//   },
//   {
//     id: 3,
//     title: "Anti-Hero",
//     artist: "Taylor Swift",
//     genre: "Pop"
//   },
//   {
//     id: 4,
//     title: "HUMBLE.",
//     artist: "Kendrick Lamar",
//     genre: "Rap"
//   }
// ];

// let nextId = 5;

// app.get("/songs", (req, res) => {
//   res.json(songs);
// });

// app.get("/songs/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const song = songs.find((song) => song.id === id);

//   if (!song) {
//     return res.status(404).json({
//       message: "Song not found"
//     });
//   }

//   res.json(song);
// });

// app.post("/songs", (req, res) => {
//   const { title, artist, genre } = req.body;

//   if (!title || !artist || !genre) {
//     return res.status(400).json({
//       message: "Please provide title, artist, and genre"
//     });
//   }

//   const newSong = {
//     id: nextId++,
//     title,
//     artist,
//     genre
//   };

//   songs.push(newSong);

//   res.status(201).json(newSong);
// });

// app.put("/songs/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const song = songs.find((song) => song.id === id);

//   if (!song) {
//     return res.status(404).json({
//       message: "Song not found"
//     });
//   }

//   const { title, artist, genre } = req.body;

//   if (!title || !artist || !genre) {
//     return res.status(400).json({
//       message: "Please provide title, artist, and genre"
//     });
//   }

//   song.title = title;
//   song.artist = artist;
//   song.genre = genre;

//   res.json(song);
// });

// app.delete("/songs/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const songIndex = songs.findIndex((song) => song.id === id);

//   if (songIndex === -1) {
//     return res.status(404).json({
//       message: "Song not found"
//     });
//   }

//   const deletedSong = songs.splice(songIndex, 1);

//   res.json({
//     message: "Song deleted successfully",
//     song: deletedSong[0]
//   });
// });

// const fs = require("fs");
// const path = require("path");

// app.get("/visits", (req, res) => {
//   const visitsPath = path.join(__dirname, "data", "visits.json");
//   const visits = JSON.parse(data);

//   visits.count++;
//   res.json({ count: visits.count });
// });

// app.get("/guestbook", async (req, res) => {
//   const guestbookText = await readFile("./data/guestbook.json", "utf-8");
//   const guestbook = JSON.parse(guestbookText);
//   res.json(guestbook);
// });

// app.post("/guestbook", async (req, res) => {
//   const guestbookText = await readFile("./data/guestbook.json", "utf-8");
//   const guestbook = JSON.parse(guestbookText);
//   const { name, message } = req.body;
//   guestbook.push({ name, message });
//   await writeFile(
//     "./data/guestbook.json",
//     JSON.stringify(guestbook, null, 2),
//     "utf-8",
//   );

//   res.status(201).json({ name, message });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });


const fs = require("fs/promises");
const path = require("path");
app.use(express.json());
const PORT = 3000;
const filePath = path.join(__dirname, "data", "songs.json");


async function readSongs() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

async function writeSongs(songs) {
  await fs.writeFile(
    filePath,
    JSON.stringify(songs, null, 2)
  );
}


app.get("/songs", async (req, res) => {
  try {
    const songs = await readSongs();

    res.json(songs);
  } catch (error) {
    res.status(500).json({
      message: "Error reading songs",
      error: error.message
    });
  }
});


app.get("/songs/:id", async (req, res) => {
  try {
    const songs = await readSongs();

    const id = Number(req.params.id);

    const song = songs.find(song => song.id === id);

    if (!song) {
      return res.status(404).json({
        message: "Song not found"
      });
    }

    res.json(song);
  } catch (error) {
    res.status(500).json({
      message: "Error finding song",
      error: error.message
    });
  }
});



app.post("/songs", async (req, res) => {
  try {
    const { title, artist, genre } = req.body;

    if (!title || !artist || !genre) {
      return res.status(400).json({
        message: "Please provide title, artist, and genre"
      });
    }

    const songs = await readSongs();

    const highestId = songs.reduce(
      (highest, song) => Math.max(highest, song.id),
      0
    );

    const newSong = {
      id: highestId + 1,
      title,
      artist,
      genre
    };

    songs.push(newSong);

    await writeSongs(songs);

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({
      message: "Error creating song",
      error: error.message
    });
  }
});



app.put("/songs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const { title, artist, genre } = req.body;

    if (!title || !artist || !genre) {
      return res.status(400).json({
        message: "Please provide title, artist, and genre"
      });
    }

    const songs = await readSongs();

    const song = songs.find(song => song.id === id);

    if (!song) {
      return res.status(404).json({
        message: "Song not found"
      });
    }

    song.title = title;
    song.artist = artist;
    song.genre = genre;

    await writeSongs(songs);

    res.json(song);
  } catch (error) {
    res.status(500).json({
      message: "Error updating song",
      error: error.message
    });
  }
});



app.delete("/songs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const songs = await readSongs();

    const index = songs.findIndex(song => song.id === id);

    if (index === -1) {
      return res.status(404).json({
        message: "Song not found"
      });
    }

    const deletedSong = songs.splice(index, 1);

    await writeSongs(songs);

    res.json({
      message: "Song deleted successfully",
      song: deletedSong[0]
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting song",
      error: error.message
    });
  }
});



app.get("/songs", async (req, res) => {
  try {
    const songs = await readSongs();

    const genre = req.query.genre;

    if (genre) {
      const filteredSongs = songs.filter(
        song => song.genre.toLowerCase() === genre.toLowerCase()
      );

      return res.json(filteredSongs);
    }

    res.json(songs);
  } catch (error) {
    res.status(500).json({
      message: "Error reading songs",
      error: error.message
    });
  }
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
